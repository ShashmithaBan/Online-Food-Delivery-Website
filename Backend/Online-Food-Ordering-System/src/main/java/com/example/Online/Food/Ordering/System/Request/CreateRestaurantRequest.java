package com.example.Online.Food.Ordering.System.Request;

import com.example.Online.Food.Ordering.System.Model.Address;
import com.example.Online.Food.Ordering.System.Model.ContactInformation;
import lombok.Data;

import java.util.List;

@Data
public class CreateRestaurantRequest {

    private Long id;
    private String name;
    private String description;
    private String cuisineType;
    private Address address;
    private ContactInformation contactInformation;
    private String openingHours;
    private List<String> images;
}
