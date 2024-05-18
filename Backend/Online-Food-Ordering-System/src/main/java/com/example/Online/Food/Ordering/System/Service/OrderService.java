package com.example.Online.Food.Ordering.System.Service;

import com.example.Online.Food.Ordering.System.Model.Order;
import com.example.Online.Food.Ordering.System.Model.User;

public interface OrderService {

    public Order createOrder(OrderRequest req , User user);
}
