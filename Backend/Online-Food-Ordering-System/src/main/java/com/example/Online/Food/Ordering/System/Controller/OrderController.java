package com.example.Online.Food.Ordering.System.Controller;

import com.example.Online.Food.Ordering.System.Model.CartItems;
import com.example.Online.Food.Ordering.System.Model.Order;
import com.example.Online.Food.Ordering.System.Model.User;
import com.example.Online.Food.Ordering.System.Request.AddCartItemRequest;
import com.example.Online.Food.Ordering.System.Request.OrderRequest;
import com.example.Online.Food.Ordering.System.Service.OrderService;
import com.example.Online.Food.Ordering.System.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class OrderController {

    @Autowired
    private OrderService orderService;

    @Autowired
    private UserService userService;

    @PostMapping("/order")
    public ResponseEntity<Order> createOrder(
            @RequestBody  OrderRequest req,
            @RequestHeader("Authorization") String jwt
    ) throws Exception {
        User user = userService.findUserByJwtToken(jwt);
        Order order = orderService.createOrder(req , user);

        return new  ResponseEntity<>(order , HttpStatus.OK);

    }
    @GetMapping("/order/user")
    public ResponseEntity<List<Order>> getOrderHistory(

            @RequestHeader("Authorization") String jwt
    ) throws Exception {
        User user = userService.findUserByJwtToken(jwt);
        List<Order> order = orderService.getUserOrders(user.getId());

        return new  ResponseEntity<>(order , HttpStatus.OK);

    }

}
