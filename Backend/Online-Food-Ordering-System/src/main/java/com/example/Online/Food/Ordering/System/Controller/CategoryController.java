package com.example.Online.Food.Ordering.System.Controller;

import com.example.Online.Food.Ordering.System.Model.Category;
import com.example.Online.Food.Ordering.System.Model.User;
import com.example.Online.Food.Ordering.System.Service.CategoryService;
import com.example.Online.Food.Ordering.System.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class CategoryController {

    @Autowired
    private CategoryService categoryService;

    @Autowired
    private UserService userService;

    @PostMapping("/admin/category")
    public ResponseEntity<Category> createCategory(@RequestBody Category category,
                                                   @RequestHeader("Authorization") String jwt) throws Exception {

            User user = userService.findUserByJwtToken(jwt);
            Category createdCategory = categoryService.createCategory(category.getName(),user.getId());

             return new ResponseEntity<>(createdCategory, HttpStatus.CREATED);
    }
    @GetMapping("/category/restaurant/{id}")
    public ResponseEntity<List<Category>> getRestaurantCategory(
            @PathVariable long id,
            @RequestHeader("Authorization") String jwt) throws Exception {

        // Extract user information from JWT
        User user = userService.findUserByJwtToken(jwt);

        // Retrieve categories by restaurant ID
        List<Category> categories = categoryService.findCategoryByRestaurantId(id);

        // Return the list of categories with OK status
        return new ResponseEntity<>(categories, HttpStatus.OK);
    }
}
