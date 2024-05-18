package com.example.Online.Food.Ordering.System.Request;

import lombok.Data;

import java.util.List;

@Data
public class AddCartItemRequest {

    private Long foodId;

    private int quantity;

    private List<String> Ingredients;
}
