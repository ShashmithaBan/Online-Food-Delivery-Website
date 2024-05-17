package com.example.Online.Food.Ordering.System.Controller;

import com.example.Online.Food.Ordering.System.Model.Restaurant;
import com.example.Online.Food.Ordering.System.Model.User;
import com.example.Online.Food.Ordering.System.Request.CreateRestaurantRequest;
import com.example.Online.Food.Ordering.System.Response.MessageResponse;
import com.example.Online.Food.Ordering.System.Service.RestaurantService;
import com.example.Online.Food.Ordering.System.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/admin/restaurants")
public class AdminRestaurantController {

    @Autowired
    private RestaurantService restaurantService;

    @Autowired
    private UserService userService;

    @PostMapping()
     public ResponseEntity<Restaurant> createRestaurant(
             @RequestBody CreateRestaurantRequest req,
             @RequestHeader("Authorization") String jwt
             ) throws Exception {
         User user = userService.findUserByJwtToken(jwt);

         Restaurant restaurant = restaurantService.createRestaurant(req,user);

         return new ResponseEntity<>(restaurant, HttpStatus.CREATED);
     }

    @PutMapping("/{id}" )//In here we are getting the id
    public ResponseEntity<Restaurant> updateRestaurant(
            @RequestBody CreateRestaurantRequest req,
            @RequestHeader("Authorization") String jwt,
            @PathVariable Long id
            ) throws Exception {
        User user = userService.findUserByJwtToken(jwt);

        Restaurant restaurant = restaurantService.updateRestaurant(id , req);

        return new ResponseEntity<>(restaurant, HttpStatus.CREATED);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<MessageResponse> deleteRestaurant(
            @RequestHeader("Authorization") String jwt,
            @PathVariable Long id
    ) throws Exception {
        User user = userService.findUserByJwtToken(jwt);

        restaurantService.deleteRestaurant(id);
        MessageResponse res = new MessageResponse();
        res.setMessage("restuarant deleted successfully");

        return new ResponseEntity<>(res, HttpStatus.OK);
    }
    @PutMapping("/{id}/status")
    public ResponseEntity<Restaurant> updateRestaurantStatus(
            @RequestHeader("Authorization") String jwt,
            @PathVariable Long id
    ) throws Exception {
        User user = userService.findUserByJwtToken(jwt);

        Restaurant restaurant = restaurantService.updateRestaurantStatus(id);


        return new ResponseEntity<>(restaurant , HttpStatus.OK);
    }
    @GetMapping("/user" )//In here we are getting the id
    public ResponseEntity<Restaurant> findRestaurantByUserId(

            @RequestHeader("Authorization") String jwt

    ) throws Exception {
        User user = userService.findUserByJwtToken(jwt);

        Restaurant restaurant = restaurantService.getRestaurantByUserId(user.getId());

        return new ResponseEntity<>(restaurant, HttpStatus.OK);
    }
}
