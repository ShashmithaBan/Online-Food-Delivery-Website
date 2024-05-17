package com.example.Online.Food.Ordering.System.Service;

import com.example.Online.Food.Ordering.System.Dto.RestaurantDto;
import com.example.Online.Food.Ordering.System.Model.Restaurant;
import com.example.Online.Food.Ordering.System.Model.User;
import com.example.Online.Food.Ordering.System.Request.CreateRestaurantRequest;

import java.util.List;


public  interface RestaurantService  {

    public Restaurant createRestaurant(CreateRestaurantRequest req , User user);

    public Restaurant updateRestaurant(Long restaurantId , CreateRestaurantRequest updatedRestaurant) throws Exception;

    public void deleteRestaurant(Long restaurantId) throws Exception;

    public List<Restaurant> getAllRestaurant();

    public List<Restaurant> searchRestaurant(String keyword);

    public Restaurant findRestaurantById(Long id) throws Exception;

    public Restaurant getRestaurantByUserId(Long userId) throws Exception;

    public RestaurantDto addToFavourite(Long restaurantId, User user)throws Exception;
    public Restaurant updateRestaurantStatus(Long id)throws Exception; //this is for to updated the status whether the restaurant is open or not
}
