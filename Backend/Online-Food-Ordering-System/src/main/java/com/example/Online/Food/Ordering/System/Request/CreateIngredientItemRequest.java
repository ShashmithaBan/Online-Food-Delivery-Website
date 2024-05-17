package com.example.Online.Food.Ordering.System.Request;

import lombok.Data;

@Data
public class CreateIngredientItemRequest {

    private String name;
    private Long categoryId;
    private Long restaurantId;
}
