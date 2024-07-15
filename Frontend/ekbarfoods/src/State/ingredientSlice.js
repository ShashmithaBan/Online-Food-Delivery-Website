import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const API = 'http://localhost:5454';

export const getIngredientOfRestaurant = createAsyncThunk(
  'ingredient/getIngredientOfRestaurant',
  async ({ id, jwt }, thunkAPI) => {
    try {
      const response = await axios.get(`${API}/api/admin/ingredients/restaurant/${id}`, {
        headers: {
          Authorization: `Bearer ${jwt}`
        }
      });
      console.log("get restaurant ingredients", response.data);
      return response.data;
    } catch (error) {
      console.error('Fetch the ingredients owned by the restaurant error:', error.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const createIngredients = createAsyncThunk(
  'ingredient/createIngredients',
  async ({ data, jwt }, thunkAPI) => {
    try {
      const response = await axios.post(`${API}/api/admin/ingredients`, data, {
        headers: {
          Authorization: `Bearer ${jwt}`
        }
      });
      console.log("create ingredient", response.data);
      return response.data;
    } catch (error) {
      console.error('create ingredients error:', error.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const createIngredientsCategory = createAsyncThunk(
  'ingredient/createIngredientsCategory',
  async ({ data, jwt }, thunkAPI) => {
    try {
      const response = await axios.post(`${API}/api/admin/ingredients/category`, data, {
        headers: {
          Authorization: `Bearer ${jwt}`
        }
      });
      console.log("create ingredient category", response.data);
      return response.data;
    } catch (error) {
      console.error('create ingredients category error:', error.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getIngredientCategoryOfRestaurant = createAsyncThunk(
  'ingredient/getIngredientCategoryOfRestaurant',
  async ({ id, jwt }, thunkAPI) => {
    try {
      const response = await axios.get(`${API}/api/admin/ingredients/restaurant/${id}/category`, {
        headers: {
          Authorization: `Bearer ${jwt}`
        }
      });
      console.log("get restaurant ingredients category", response.data);
      return response.data;
      
    } catch (error) {
      console.error('Fetch the ingredients categories owned by the restaurant error:', error.message);
      
      if (error.response) {
        console.error('Server responded with error:', error.response.data);
        return thunkAPI.rejectWithValue(error.response.data);
      } else if (error.request) {
        console.error('No response received:', error.request);
        return thunkAPI.rejectWithValue('No response received');
      } else {
        console.error('Error setting up request:', error.message);
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  }
);

export const updateStockofIngredients = createAsyncThunk(
  'ingredient/updateStockofIngredients',
  async ({ id, jwt }, thunkAPI) => {
    try {
      const response = await axios.put(`${API}/api/admin/ingredients/${id}/stock`, {}, {
        headers: {
          Authorization: `Bearer ${jwt}`
        }
      });
      console.log("update stock", response.data);
      return response.data;
    } catch (error) {
      console.error('update ingredient stock error:', error.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const ingredientSlice = createSlice({
  name: 'ingredient',
  initialState: {
    ingredients: [],
    categories: [], 
    update: null,
    loading: false,
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getIngredientOfRestaurant.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getIngredientOfRestaurant.fulfilled, (state, action) => {
        state.loading = false;
        state.ingredients = action.payload;
      })
      .addCase(getIngredientOfRestaurant.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(createIngredients.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createIngredients.fulfilled, (state, action) => {
        state.loading = false;
        state.ingredients.push(action.payload);
      })
      .addCase(createIngredients.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(createIngredientsCategory.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createIngredientsCategory.fulfilled, (state, action) => {
        
        const categories = Array.isArray(action.payload) ? action.payload : [action.payload];
        state.loading = false;
        state.categories = state.categories.concat(categories);
      })
      .addCase(createIngredientsCategory.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(getIngredientCategoryOfRestaurant.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getIngredientCategoryOfRestaurant.fulfilled, (state, action) => {
        state.loading = false;
        state.categories = action.payload;
      })
      
      .addCase(getIngredientCategoryOfRestaurant.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(updateStockofIngredients.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateStockofIngredients.fulfilled, (state, action) => {
        state.loading = false;
        state.update = action.payload;
      })
      .addCase(updateStockofIngredients.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default ingredientSlice.reducer;
