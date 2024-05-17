package com.example.Online.Food.Ordering.System.Repo;

import com.example.Online.Food.Ordering.System.Model.IngredientsCategory;
import com.example.Online.Food.Ordering.System.Model.IngredientsItems;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface IngredientItemRepository extends JpaRepository<IngredientsItems , Long> {

    List<IngredientsItems> findByRestaurantId(Long id);
}
