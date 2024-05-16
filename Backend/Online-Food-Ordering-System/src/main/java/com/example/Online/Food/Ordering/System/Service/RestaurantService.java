package com.example.Online.Food.Ordering.System.Service;

import com.example.Online.Food.Ordering.System.Model.User;
import org.springframework.stereotype.Service;

@Service
public  interface RestaurantService  {

    public RestaurantService createRestaurant(createRestaurantRequest req , User user);
}
