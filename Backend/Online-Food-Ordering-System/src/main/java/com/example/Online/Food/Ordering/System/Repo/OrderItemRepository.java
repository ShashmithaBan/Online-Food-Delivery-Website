package com.example.Online.Food.Ordering.System.Repo;

import com.example.Online.Food.Ordering.System.Model.OrderItems;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OrderItemRepository extends JpaRepository<OrderItems,Long> {
}
