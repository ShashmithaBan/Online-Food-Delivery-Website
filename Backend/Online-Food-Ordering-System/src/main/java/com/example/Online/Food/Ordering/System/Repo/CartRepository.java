package com.example.Online.Food.Ordering.System.Repo;

import com.example.Online.Food.Ordering.System.Model.Cart;
import org.springframework.data.jpa.repository.JpaRepository;

public interface  CartRepository extends JpaRepository <Cart,Long> {

    public Cart findByCustomerId(Long userId);
}
