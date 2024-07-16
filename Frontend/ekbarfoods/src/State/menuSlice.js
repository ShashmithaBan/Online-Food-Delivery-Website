import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import axios from "axios";

const API = 'http://localhost:5454';

// Define API utility
const api = axios.create({
  baseURL: API,
});  

export const createMenuItem = createAsyncThunk(
  'menuItem/createMenuItem',
  async ({ reqData, jwt }, thunkAPI) => {
    try {
        console.log('data received' , reqData)
      const { data } = await axios.post(`${API}/api/admin/food`, reqData, {
        headers: {
          Authorization: `Bearer ${jwt}`
        }
      });
      console.log("created menu", data);
      return data;
    } catch (error) {
      console.log("catch error", error);
      throw error;
    }
  }
);
export const getMenuItemByRestaurantId = createAsyncThunk(
    'menuItem/getMenuItemByRestaurantId',
    async ({ reqData }) => {
      try {
        const { data } = await api.get(`/api/food/restaurant/${reqData.restaurantId}`, {
          params: {
            vegetarian: reqData.vegetarian,
            nonveg: reqData.nonveg,
            seasonal: reqData.seasonal,
            food_category: reqData.food_category
          }
        });
        console.log("Item of the menu", data);
        return data;
      } catch (error) {
        console.log("catch error", error);
        throw error;
      }
    }
  );
  export const searchMenuItem = createAsyncThunk(
    'menuItem/searchMenuItem',
    async ({ keyword, jwt }) => {
      try {
        const { data } = await api.get(`/api/food/search?name=${keyword}`, {
          headers: {
            Authorization: `Bearer ${jwt}`
          }
        });
        console.log("searched items", data);
        return data;
      } catch (error) {
        console.log("catch error", error);
        throw error;
      }
    }
  );
  export const updateMenuItemsAvailability = createAsyncThunk(
    'menuItem/updateMenuItemsAvailability',
    async ({ foodId, jwt }) => {
      try {
        const { data } = await api.put(`/api/admin/food/${foodId}/status`, {}, {
          headers: {
            Authorization: `Bearer ${jwt}`
          }
        });
        console.log("updated menu items availability", data);
        return data;
      } catch (error) {
        console.log("catch error", error);
        throw error;
      }
    }
  );
  export const deleteMenuItem = createAsyncThunk(
    'menuItem/deleteMenuItem',
    async ({ foodId, jwt }) => {
      try {
        const { data } = await api.delete(`/api/admin/food/${foodId}`, {
          headers: {
            Authorization: `Bearer ${jwt}`
          }
        });
        console.log("delete food", data);
        return foodId; 
      } catch (error) {
        console.log("catch error", error);
        throw error;
      }
    }
  );
        
  export const menuSlice = createSlice({
    name: 'menu',
    initialState: {
        menuItems: [],
        loading: false,
        error: null,
        search: [],
        message: null,
    },
    reducers: {
      
    },
    extraReducers: (builder) => {
      builder
        .addCase(createMenuItem.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(createMenuItem.fulfilled, (state , action) => {
          state.loading = false;
          state.menuItems= action.payload;
        })
        .addCase(createMenuItem.rejected, (state , action) => {
          state.loading = false;
          state.error = action.error.message;
        })
        .addCase(getMenuItemByRestaurantId.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(getMenuItemByRestaurantId.fulfilled, (state , action) => {
          state.loading = false;
          state.menuItems= action.payload;
        })
        .addCase(getMenuItemByRestaurantId.rejected, (state , action) => {
          state.loading = false;
          state.error = action.error.message;
        })
        .addCase(searchMenuItem.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(searchMenuItem.fulfilled, (state, action) => {
          state.loading = false;
          state.menuItems= action.payload;
        })
        .addCase(searchMenuItem.rejected, (state , action) => {
          state.loading = false;
          state.error = action.error.message;
        })
        
        
    },
  });
  
  export const {  } = menuSlice.actions;
  
  export default menuSlice.reducer;