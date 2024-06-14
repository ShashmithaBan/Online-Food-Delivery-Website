package com.example.Online.Food.Ordering.System.Repo;

import com.example.Online.Food.Ordering.System.Model.IngredientsCategory;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface IngredientCategoryRepository extends JpaRepository<IngredientsCategory , Long > {

    List<IngredientsCategory> findByRestaurantId(Long id);

}
