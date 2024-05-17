package com.example.Online.Food.Ordering.System.Service;

import com.example.Online.Food.Ordering.System.Model.IngredientsCategory;
import com.example.Online.Food.Ordering.System.Model.IngredientsItems;

import java.util.List;

public interface IngredientsService {

    public IngredientsCategory createIngredientsCategory(String Name , Long restaurantId)throws Exception;

    public IngredientsCategory findIngredientCategoryById(Long id)throws Exception;

    public List<IngredientsCategory> findIngredientsCategoryByRestaurantId(Long id)throws Exception;

    public IngredientsItems createIngredientsItems(Long restaurantId , String ingredientName , Long categoryId  )throws Exception;

    public List<IngredientsItems> findRestaurantIngredients(Long restaurantId);

    public IngredientsItems updateStock(Long id)throws Exception;
}
