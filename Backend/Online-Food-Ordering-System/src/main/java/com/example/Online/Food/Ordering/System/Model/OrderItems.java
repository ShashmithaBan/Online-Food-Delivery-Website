package com.example.Online.Food.Ordering.System.Model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class OrderItems {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
@ManyToOne
    private Food food;
    private int quantity;
    private Long totalPrice;

    private List<String> ingredients;
}
