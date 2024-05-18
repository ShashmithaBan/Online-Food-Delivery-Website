package com.example.Online.Food.Ordering.System.Service;

import com.example.Online.Food.Ordering.System.Model.*;
import com.example.Online.Food.Ordering.System.Repo.*;
import com.example.Online.Food.Ordering.System.Request.OrderRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class OrderServiceImp implements OrderService{

    @Autowired
    private OrderRepository orderRepository;
    @Autowired
    private OrderItemRepository orderItemRepository;
    @Autowired
    private AddressRepository addressRepository;
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private RestaurantService restaurantService;
    @Autowired
    private CartService cartService;

    @Override
    public Order createOrder(OrderRequest req, User user) throws Exception {
        Address shipAddress = req.getDeliveryAddress();
        Address savedAddress = addressRepository.save(shipAddress);

        if(!user.getAddresses().contains(savedAddress)){
            user.getAddresses().add(savedAddress);
            userRepository.save(user);
        }
        Restaurant restaurant = restaurantService.findRestaurantById(req.getRestaurantId());

        Order createOrder = new Order();
        createOrder.setCustomer(user);
        createOrder.setRestaurant(restaurant);
        createOrder.setCreatedAt(new Date());
        createOrder.setOrderStatus("PENDING");
        createOrder.setDeliveryAddress(savedAddress);

        Cart cart = cartService.findCartByUserId(user.getId());

         List<OrderItems> orderItems = new ArrayList<>();
 for(CartItems cartItems : cart.getItem()){
     OrderItems orderItem = new OrderItems();
     orderItem.setFood(cartItems.getFood());
     orderItem.setIngredients(cartItems.getIngredients());
     orderItem.setQuantity(cartItems.getQuantity());
     orderItem.setTotalPrice(cartItems.getTotalPrice());

    OrderItems savedOrderItem = orderItemRepository.save(orderItem);
    orderItems.add(savedOrderItem);

 }
 Long total = cartService.calculateCartTotal(cart);

 createOrder.setItems(orderItems);
 createOrder.setTotalPrice(total);

 Order savedOrder= orderRepository.save(createOrder);
 restaurant.getOrders().add(savedOrder);//adding the order to restaurant alsi

        return createOrder;
    }

    @Override
    public Order updateOrderStatus(Long orderId, String orderStatus) throws Exception {
        Order order = findOrderById(orderId);
        if(orderStatus.equals("OUT_OF_DELIVERY")
            ||orderStatus.equals("DELIVERED")
                ||orderStatus.equals("COMPLETED")
                ||orderStatus.equals("PENDING")
        ){
            order.setOrderStatus(orderStatus);
            return orderRepository.save(order);
        }
        throw new Exception("Pleease Select a Valid Order Status");
    }

    @Override
    public void cancelOrder(Long orderId) throws Exception {
        Order order = findOrderById(orderId);
        orderRepository.deleteById(orderId);

    }

    @Override
    public List<Order> getUserOrders(Long userId) {
        return orderRepository.findByCustomerId(userId);
    }

    @Override
    public List<Order> getRestaurantOrder(Long restaurantId, String orderStatus) throws Exception {
        List<Order> orders = orderRepository.findByRestaurantId(restaurantId);
        if(orderStatus!=null){
            orders =
        orders.stream().filter(order ->
                order.getOrderStatus().equals(orderStatus)).collect(Collectors.toList());//use to filter orders according to the order status
        }
        return orders;
    }

    @Override
    public Order findOrderById(Long orderId) throws Exception {
        Optional<Order> optionalOrder = orderRepository.findById(orderId);
        if(optionalOrder.isEmpty()){
            throw new Exception("Ordr not found");
        }
        return optionalOrder.get();
    }
}
