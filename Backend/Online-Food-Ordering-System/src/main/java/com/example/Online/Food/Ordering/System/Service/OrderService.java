package com.example.Online.Food.Ordering.System.Service;

import com.example.Online.Food.Ordering.System.Model.Order;
import com.example.Online.Food.Ordering.System.Model.User;
import com.example.Online.Food.Ordering.System.Request.OrderRequest;

import java.util.List;

public interface OrderService {

    public Order createOrder(OrderRequest req , User user) throws Exception;

    public Order updateOrderStatus(Long orderId , String orderStatus)throws Exception;

    public void cancelOrder(Long orderId)throws Exception;

    public List<Order> getUserOrders(Long userId);

    public List<Order> getRestaurantOrder(Long restaurantId , String orderStatus)throws Exception;

    public Order findOrderById(Long orderId)throws Exception;
}
