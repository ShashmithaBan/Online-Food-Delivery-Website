package com.example.Online.Food.Ordering.System.Controller;

import com.example.Online.Food.Ordering.System.Model.IngredientsCategory;
import com.example.Online.Food.Ordering.System.Model.IngredientsItems;
import com.example.Online.Food.Ordering.System.Request.CreateIngredientCategoryRequest;
import com.example.Online.Food.Ordering.System.Request.IngredientRequest;
import com.example.Online.Food.Ordering.System.Service.IngredientsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/admin/ingredients")
public class IngredientController {

    @Autowired
    public IngredientsService ingredientsService;

    @PostMapping("/category")
    public ResponseEntity<IngredientsCategory> createIngredientCategory(
            @RequestBody CreateIngredientCategoryRequest req
    ) throws Exception {
        IngredientsCategory ingredientsItems = ingredientsService.createIngredientsCategory(req.getName() , req.getRestaurantId());
        return new ResponseEntity<>(ingredientsItems , HttpStatus.CREATED);
    }
    @PostMapping("")
    public ResponseEntity<IngredientsItems> createIngredientItem(
            @RequestBody IngredientRequest req
    ) throws Exception {
        IngredientsItems ingredientsItems = ingredientsService.createIngredientsItems(req.getRestaurantId(), req.getName(), req.getCategoryId());
        return new ResponseEntity<>(ingredientsItems , HttpStatus.CREATED);
    }
    @PutMapping("/{id}/stoke")
    public ResponseEntity<IngredientsItems> updateIngredientStoke(
            @PathVariable Long id
    ) throws Exception {
        IngredientsItems ingredientsItems = ingredientsService.updateStock(id);
        return new ResponseEntity<>(ingredientsItems , HttpStatus.OK);
    }
    @GetMapping("/restaurant/{id}")
    public ResponseEntity<List<IngredientsItems>> getRestaurantIngredients(
            @PathVariable Long id
    ) throws Exception {
        List<IngredientsItems> ingredientsItems = ingredientsService.findRestaurantIngredients(id);
        return new ResponseEntity<>(ingredientsItems , HttpStatus.OK);
    }
    @GetMapping("/restaurant/{id}/category")
    public ResponseEntity<List<IngredientsCategory>> getRestaurantIngredientsCategory(
            @PathVariable Long id
    ) throws Exception {
        List<IngredientsCategory> category = ingredientsService.findIngredientsCategoryByRestaurantId(id);
        return new ResponseEntity<>(category , HttpStatus.OK);
    }


}
