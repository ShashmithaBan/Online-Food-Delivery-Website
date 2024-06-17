import { Button, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createIngredients, loadCategories } from '../../../Components/State/Ingredient/Action';

export const CreateIngredientForm = () => {
  const { restaurant, ingredient } = useSelector((store) => store);
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name:"",
    categoryId: ""
  });
  const jwt = localStorage.getItem("jwt");
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
       ...formData,
      restaurantId: restaurant.userRestaurant.id,
      
    };

    dispatch(createIngredients({
       data,
      jwt,
    }));
    console.log(data);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData, [name]: value
    });
  };



  return (
    <div className=''>
      <div className="p-5 ">
        <h1 className="text-gray-400 text-center text-green-500 font-bold text-xl pb-10">Create Category</h1>
        <form onSubmit={handleSubmit} className='flex flex-col gap-5'>
          <TextField
            fullWidth
            id="name"
            name="name"
            label="Category Name"
            variant="outlined"
            onChange={handleInputChange}
            value={formData.name}
          />
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Category</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={formData.ingredientCategoryId}
              label="Category"
              onChange={handleInputChange}
              name='categoryId'
            >
              {ingredient.category.map((item) =><MenuItem key={item.id} value={item.id}>{item.name}</MenuItem>
              )}
            </Select>
          </FormControl>
          <Button type="submit" variant="contained">
            Create Category
          </Button>
        </form>
      </div>
    </div>
  );
};
