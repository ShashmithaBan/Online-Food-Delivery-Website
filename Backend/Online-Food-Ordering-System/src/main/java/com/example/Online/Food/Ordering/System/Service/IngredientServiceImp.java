package com.example.Online.Food.Ordering.System.Service;

import com.example.Online.Food.Ordering.System.Model.IngredientsCategory;
import com.example.Online.Food.Ordering.System.Model.IngredientsItems;
import com.example.Online.Food.Ordering.System.Model.Restaurant;
import com.example.Online.Food.Ordering.System.Repo.IngredientCategoryRepository;
import com.example.Online.Food.Ordering.System.Repo.IngredientItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class IngredientServiceImp implements IngredientsService {

    @Autowired
    private IngredientItemRepository ingredientItemRepository;

    @Autowired
    private IngredientCategoryRepository ingredientCategoryRepository;

    @Autowired
    private RestaurantService restaurantService;

    @Override
    public IngredientsCategory createIngredientsCategory(String Name, Long restaurantId) throws Exception {
        Restaurant restaurant = restaurantService.findRestaurantById(restaurantId);
        IngredientsCategory ingredientsCategory = new IngredientsCategory();
        ingredientsCategory.setName(Name);
        ingredientsCategory.setRestaurant(restaurant);

        return ingredientCategoryRepository.save(ingredientsCategory);


     }

    @Override
    public IngredientsCategory findIngredientCategoryById(Long id) throws Exception {
        Optional<IngredientsCategory> opt = ingredientCategoryRepository.findById(id);
        if(opt.isEmpty()){
            throw new Exception("Category not found");
        }
        return opt.get();
    }

    @Override
    public List<IngredientsCategory> findIngredientsCategoryByRestaurantId(Long id) throws Exception {
         restaurantService.findRestaurantById(id);//to check whether the restaurant is exist or not
        return ingredientCategoryRepository.findByRestaurantId(id);

    }

    @Override
    public IngredientsItems createIngredientsItems(Long restaurantId, String ingredientName, Long categoryId) throws Exception {
        Restaurant restaurant = restaurantService.findRestaurantById(restaurantId);
        IngredientsItems items = new IngredientsItems();
        IngredientsCategory category = findIngredientCategoryById(categoryId);

        items.setCategory(category);
        items.setRestaurant(restaurant);
        items.setName(ingredientName);

        IngredientsItems ingredientsItems = ingredientItemRepository.save(items);
        category.getIngredients().add(ingredientsItems);

        return ingredientsItems;
    }

    @Override
    public List<IngredientsItems> findRestaurantIngredients(Long restaurantId) {
        List<IngredientsItems> ingredients = ingredientItemRepository.findByRestaurantId(restaurantId);
        ingredients.forEach(item -> System.out.println("Service Layer - InStock: " + item.isInStock())); // Debugging line
        return ingredients;
    }

    @Override
    public IngredientsItems updateStock(Long id) throws Exception {
         Optional<IngredientsItems> optionalIngredientsItems = ingredientItemRepository.findById(id);
         if(optionalIngredientsItems.isEmpty()){
             throw new  Exception("Ingredient not found");
         }
         IngredientsItems item = optionalIngredientsItems.get();
         item.setInStock(!item.isInStock());

        return ingredientItemRepository.save(item);
    }
}
