package com.example.Online.Food.Ordering.System.Controller;

import com.example.Online.Food.Ordering.System.Dto.RestaurantDto;
import com.example.Online.Food.Ordering.System.Model.Restaurant;
import com.example.Online.Food.Ordering.System.Model.User;
import com.example.Online.Food.Ordering.System.Request.CreateRestaurantRequest;
import com.example.Online.Food.Ordering.System.Service.RestaurantService;
import com.example.Online.Food.Ordering.System.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/restaurants")
public class RestaurantController {
    @Autowired
    private RestaurantService restaurantService;

    @Autowired
    private UserService userService;

    @GetMapping("/search")
    public ResponseEntity<List<Restaurant>> searchRestaurant(
            @RequestHeader("Authorization") String jwt,
            @RequestParam String keyword
    ) throws Exception {
        User user = userService.findUserByJwtToken(jwt);

        List<Restaurant> restaurant = restaurantService .searchRestaurant(keyword);

        return new ResponseEntity<>(restaurant, HttpStatus.OK);
    }
    @GetMapping()
    public ResponseEntity<List<Restaurant>> getAllRestaurant(
            @RequestHeader("Authorization") String jwt

    ) throws Exception {
        User user = userService.findUserByJwtToken(jwt);

        List<Restaurant> restaurant = restaurantService.getAllRestaurant();

        return new ResponseEntity<>(restaurant, HttpStatus.OK);
    }
    @GetMapping("/{id}")
    public ResponseEntity< Restaurant> findRestaurantById(
            @RequestHeader("Authorization") String jwt,
            @PathVariable Long id

    ) throws Exception {
        User user = userService.findUserByJwtToken(jwt);

        Restaurant restaurant = restaurantService.findRestaurantById(id);

        return new ResponseEntity<>(restaurant, HttpStatus.OK);
    }

    @PutMapping("/{id}/add-favorites")
    public ResponseEntity< RestaurantDto> addToFavorites (
            @RequestHeader("Authorization") String jwt,
            @PathVariable Long id

    ) throws Exception {
        User user = userService.findUserByJwtToken(jwt);

        RestaurantDto restaurantDto = restaurantService.addToFavourite(id,user);

        return new ResponseEntity<>(restaurantDto, HttpStatus.OK);
    }

}
