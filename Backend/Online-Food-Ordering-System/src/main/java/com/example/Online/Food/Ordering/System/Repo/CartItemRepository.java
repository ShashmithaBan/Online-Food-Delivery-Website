package com.example.Online.Food.Ordering.System.Repo;

import com.example.Online.Food.Ordering.System.Model.Cart;
import com.example.Online.Food.Ordering.System.Model.CartItems;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CartItemRepository extends JpaRepository<CartItems , Long> {

    public Cart findCartByCustomerId(Long userId);
}
