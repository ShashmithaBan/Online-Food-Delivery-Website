package com.example.Online.Food.Ordering.System.Request;

import com.example.Online.Food.Ordering.System.Model.Category;
import com.example.Online.Food.Ordering.System.Model.IngredientsItems;
import lombok.Data;

import java.util.List;

@Data
public class CreateFoodRequest {

    private String name;
    private String description;
    private Long price;

    private Category category;
    private List<String> images;

    private Long restaurantId;
    private boolean vegetarian;
    private boolean seasonal;
    private List<IngredientsItems> ingredients;

}
