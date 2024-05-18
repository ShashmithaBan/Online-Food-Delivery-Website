package com.example.Online.Food.Ordering.System.Request;

import com.example.Online.Food.Ordering.System.Model.Address;
import lombok.Data;

@Data
public class OrderRequest {
     private Long restaurantId;
     private Address deliveryAddress;
}
