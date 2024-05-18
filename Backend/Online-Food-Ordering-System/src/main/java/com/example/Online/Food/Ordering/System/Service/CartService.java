package com.example.Online.Food.Ordering.System.Service;

import com.example.Online.Food.Ordering.System.Model.Cart;
import com.example.Online.Food.Ordering.System.Model.CartItems;
import com.example.Online.Food.Ordering.System.Request.AddCartItemRequest;

public interface CartService {

    public CartItems addItemToCart(AddCartItemRequest req , String jwt)throws Exception;

    public CartItems updateCartItemQuantity(Long cartItemId , int quantity)throws Exception;

    public Cart removeItemFromCart(Long cartItemId , String jwt)throws Exception;

    public Long calculateCartTotal(Cart cart)throws Exception;

    public Cart findCartById(Long id)throws Exception;

    public Cart findCartByUserId(String jwt)throws Exception;

    public Cart clearCart(String jwt)throws Exception;
}
