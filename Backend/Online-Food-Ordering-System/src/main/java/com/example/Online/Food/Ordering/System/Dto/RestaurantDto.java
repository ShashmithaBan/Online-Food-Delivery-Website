package com.example.Online.Food.Ordering.System.Dto;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import lombok.Data;

import java.util.List;

@Data
public class RestaurantDto {

    private String title;

    @Column(length = 1000)
    private List<String> images;

    private String description;
    private Long id;


}
