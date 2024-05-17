package com.example.Online.Food.Ordering.System.Repo;

import com.example.Online.Food.Ordering.System.Model.Restaurant;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface RestaurantRepository extends JpaRepository<Restaurant , Long> {

    @Query("SELECT r FROM Restaurant r WHERE lower(r.name) LIKE lower(concat('%',:query,'%')) OR lower(r.cuisineType) LIKE lower(concat('%', :query,'%')) ")//lower is used beacuase the make the comparison items in LowerCase
    List<Restaurant> findBySearchQuery(String query);

    Restaurant findByOwnerId(Long userId );

}
