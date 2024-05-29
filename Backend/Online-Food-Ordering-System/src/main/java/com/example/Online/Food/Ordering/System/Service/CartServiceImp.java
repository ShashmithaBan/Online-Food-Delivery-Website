package com.example.Online.Food.Ordering.System.Service;

import com.example.Online.Food.Ordering.System.Model.Cart;
import com.example.Online.Food.Ordering.System.Model.CartItems;
import com.example.Online.Food.Ordering.System.Model.Food;
import com.example.Online.Food.Ordering.System.Model.User;
import com.example.Online.Food.Ordering.System.Repo.CartItemRepository;
import com.example.Online.Food.Ordering.System.Repo.CartRepository;
import com.example.Online.Food.Ordering.System.Repo.FoodRepository;
import com.example.Online.Food.Ordering.System.Request.AddCartItemRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class CartServiceImp implements CartService{

    @Autowired
    private CartRepository cartRepository;

    @Autowired
    private CartItemRepository cartItemRepository;

    @Autowired
    private UserService userService;

    @Autowired
    private FoodService foodService;

    @Override
    public CartItems addItemToCart(AddCartItemRequest req, String jwt) throws Exception {
        User user = userService.findUserByJwtToken(jwt);
        Food food = foodService.findFoodById(req.getFoodId());
        Cart cart = cartRepository.findByCustomerId(user.getId());

        for (CartItems cartItem:  cart.getItem()){
            if (cartItem.getFood().equals(food)){
            int newQuantity = cartItem.getQuantity()+ req.getQuantity();
            return updateCartItemQuantity(cartItem.getId(),newQuantity);
            }
        }
        CartItems newCartItem = new CartItems();
        newCartItem.setCart(cart);
        newCartItem.setFood(food);
        newCartItem.setQuantity(req.getQuantity());
        newCartItem.setIngredients(req.getIngredients());
        newCartItem.setTotalPrice(req.getQuantity()* food.getPrice());

        CartItems savedCartItem = cartItemRepository.save(newCartItem);

        cart.getItem().add(savedCartItem);

        return savedCartItem;
    }

    @Override
    public CartItems updateCartItemQuantity(Long cartItemId, int quantity) throws Exception {
        Optional<CartItems> cartItemsOptional =cartItemRepository.findById(cartItemId);
        if(cartItemsOptional.isEmpty()){
            throw new Exception("Cart is not found");
        }
        CartItems items =  cartItemsOptional.get();
        items.setQuantity(quantity);
        items.setTotalPrice(items.getFood().getPrice()*quantity);

        return cartItemRepository.save(items);
    }

    @Override
    public Cart removeItemFromCart(Long cartItemId, String jwt) throws Exception {
        User user = userService.findUserByJwtToken(jwt);

        Cart cart = cartRepository.findByCustomerId(user.getId());

        Optional<CartItems> cartItemsOptional =cartItemRepository.findById(cartItemId);
        if(cartItemsOptional.isEmpty()){
            throw new Exception("Cart is not found");
        }
        CartItems item = cartItemsOptional.get();
        cart.getItem().remove(item);

        return cartRepository.save(cart);
    }

    @Override
    public Long calculateCartTotal(Cart cart) throws Exception {
        Long total = 0l;

        for (CartItems cartItem : cart.getItem()){
            total += cartItem.getFood().getPrice()*cartItem.getQuantity();
        }

        return total;
    }

    @Override
    public Cart findCartById(Long id) throws Exception {
        Optional<Cart> optionalCart = cartRepository.findById(id);
        if(optionalCart.isEmpty()){
            throw new Exception("Cart is not found");
        }
        return optionalCart.get();
    }

    @Override
    public Cart findCartByUserId(Long userId) throws Exception {

        Cart cart= cartRepository.findByCustomerId(userId);
        cart.setTotal(calculateCartTotal(cart));
        return cart;
    }

    @Override
    public Cart clearCart(Long userId) throws Exception {

        Cart cart = findCartByUserId(userId);
        cart.getItem().clear();
        return cartRepository.save(cart);
    }
}
