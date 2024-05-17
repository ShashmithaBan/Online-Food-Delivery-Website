package com.example.Online.Food.Ordering.System.Service;

import com.example.Online.Food.Ordering.System.Model.Category;
import com.example.Online.Food.Ordering.System.Model.Food;
import com.example.Online.Food.Ordering.System.Model.Restaurant;
import com.example.Online.Food.Ordering.System.Request.CreateFoodRequest;

import java.util.List;

public interface FoodService {

    public Food createFood(CreateFoodRequest req , Category category , Restaurant restaurant);

    void deleteFood(Long foodId)throws Exception;

    //This is  use because if user want to category like is Veg or Nonveg
    public List<Food> getRestaurantsFood(Long restaurantId , boolean isVegetarian , boolean isNonveg , boolean isSeasonal ,  String FoodCategory);

    public List<Food> searchFood(String keyword);//keyword is use because user can search anything

    public Food findFoodById(Long foodId)throws Exception;

    public Food updateAvailabilityStatus(Long foodId)throws Exception;//This is for to if food is out of stock the owner can to change it that the food is not available
}
