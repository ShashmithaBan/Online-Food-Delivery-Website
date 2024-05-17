package com.example.Online.Food.Ordering.System.Request;

import lombok.Data;

@Data
public class CreateIngredientCategoryRequest {

    private String name;
    private Long restaurantId;


}
