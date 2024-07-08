import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const API = 'http://localhost:5454';

export const getAllRestaurants = createAsyncThunk(
  'restaurant/getAllRestaurants',
  async (token, thunkAPI) => {
    try {
      const response = await axios.get(`${API}/api/restaurants`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log('All Restaurants:', response.data);
      return response.data;
    } catch (error) {
      console.error('Fetch all restaurants error:', error.message);
      throw error;
    }
  }
);
export const getRestaurantByUserId = createAsyncThunk(
  'restaurant/getRestaurantByUserId',
  async (token, thunkAPI) => {
    try {
      const { data } = await axios.get(`${API}/api/admin/restaurants/user`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log("get restaurant by userid", data);
      return data;
    } catch (error) {
      console.error('Fetch the restaurant owned by the user error:', error.message);
      throw error;
    }
  }
);
export const getRestaurantById = createAsyncThunk(
  'restaurant/getRestaurantById',
  async (id ,jwt, thunkAPI) => {
    try {
      const {data }= await axios.get(`${API}/api/restaurants/${id}`,
        {headers:{
            Authorization:`Bearer ${jwt}`
        }
    });
    console.log("get restaurant by userid",data )
    return data;
    
    } catch (error) {
      console.error('Fetch the restaurant own by the user error:', error.message);
      throw error;
    }
  }
)

export const createRestaurant = createAsyncThunk(
  'restaurant/createRestaurant',
  async ({reqData,jwt}, thunkAPI) => {
    try {
      console.log('data came', reqData )
      const response = await axios.post(`${API}/api/admin/restaurants`, reqData, {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      });
      console.log("created", response.data);
      return response.data;
    } catch (error) {
      console.error('Failed to create the restaurant:', error.message);
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);



export const restaurantSlice = createSlice({
  name: 'restaurant',
  initialState: {
    restaurants: [],
    userRestaurant: null,
    restaurant: null,
    loading: false,
    error: null,
    events: [],
    restaurantEvents: [],
    categories: [],
    
  },
  reducers: {
    
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllRestaurants.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAllRestaurants.fulfilled, (state, action) => {
        state.loading = false;
        state.restaurants = action.payload;
      })
      .addCase(getAllRestaurants.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || action.error;
      })
      .addCase(getRestaurantByUserId.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getRestaurantByUserId.fulfilled, (state, action) => {
        state.loading = false;
        state.userRestaurant = action.payload;
      })
      .addCase(getRestaurantByUserId.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || action.error;
      })
      .addCase(getRestaurantById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getRestaurantById.fulfilled, (state, action) => {
        state.loading = false;
        state.restaurant = action.payload;
      })
      .addCase(getRestaurantById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || action.error;
      })
      .addCase(createRestaurant.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createRestaurant.fulfilled, (state, action) => {
        state.loading = false;
        state.userRestaurant = action.payload;
        state.restaurants.push(action.payload);
      })
      .addCase(createRestaurant.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || action.error;
      });
  },
});

export const {  } = restaurantSlice.actions;

export default restaurantSlice.reducer;
