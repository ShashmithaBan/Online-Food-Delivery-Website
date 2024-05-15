package com.example.Online.Food.Ordering.System.Response;

import com.example.Online.Food.Ordering.System.Model.USER_ROLE;
import lombok.Data;

@Data
public class AuthResponse {
    private String jwt;
    private String message;
    private USER_ROLE role;
}
