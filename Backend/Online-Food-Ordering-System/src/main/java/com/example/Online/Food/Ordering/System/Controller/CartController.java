package com.example.Online.Food.Ordering.System.Controller;

import com.example.Online.Food.Ordering.System.Model.Cart;
import com.example.Online.Food.Ordering.System.Model.CartItems;
import com.example.Online.Food.Ordering.System.Model.User;
import com.example.Online.Food.Ordering.System.Request.AddCartItemRequest;
import com.example.Online.Food.Ordering.System.Request.UpdateCartItemRequest;
import com.example.Online.Food.Ordering.System.Service.CartService;
import com.example.Online.Food.Ordering.System.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
public class CartController {

    @Autowired
    private CartService cartService;
    @Autowired
    private UserService userService;


    @PutMapping("/cart/add")
    public ResponseEntity<CartItems> addItemToCart(
            @RequestBody AddCartItemRequest req,
            @RequestHeader("Authorization") String jwt
            ) throws Exception {
        CartItems cartItem = cartService.addItemToCart(req,jwt);

        return new  ResponseEntity<>(cartItem , HttpStatus.OK);

     }
    @PutMapping("/cart-item/update")
    public ResponseEntity<CartItems> updateCartItemQuantity (
            @RequestBody UpdateCartItemRequest req,
            @RequestHeader("Authorization") String jwt
    ) throws Exception {
        CartItems cartItem = cartService.updateCartItemQuantity(req.getCartItemId(), req.getQuantity());

        return new  ResponseEntity<>(cartItem , HttpStatus.OK);

    }
    @DeleteMapping("/cart-item/{id}/remove")
    public ResponseEntity<Cart > removeCartItem (
            @PathVariable Long id,
            @RequestHeader("Authorization") String jwt
    ) throws Exception {
        Cart cart = cartService.removeItemFromCart(id, jwt);

        return new  ResponseEntity<>(cart , HttpStatus.OK);

    }
    @PutMapping("/cart/clear")
    public ResponseEntity<Cart> clearCart (

            @RequestHeader("Authorization") String jwt
    ) throws Exception {
        User user = userService.findUserByJwtToken(jwt);
        Cart cart = cartService.clearCart(user.getId());

        return new  ResponseEntity<>(cart , HttpStatus.OK);

    }
    @GetMapping("/cart")
    public ResponseEntity<Cart> findUserCart (

            @RequestHeader("Authorization") String jwt
    ) throws Exception {
        User user = userService.findUserByJwtToken(jwt);
        Cart cart = cartService.findCartByUserId(user.getId());

        return new  ResponseEntity<>(cart , HttpStatus.OK);

    }
}
