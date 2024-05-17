package com.example.Online.Food.Ordering.System.Service;

import com.example.Online.Food.Ordering.System.Model.Category;
import com.example.Online.Food.Ordering.System.Model.User;

import java.util.List;

public interface CategoryService  {

    public Category createCategory(String Name , Long id) throws Exception;

    public List<Category> findCategoryByRestaurantId(Long id)throws Exception;

    public Category findCategoryById(Long id)throws Exception;
}
