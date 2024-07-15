import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const API = 'http://localhost:5454';

// Define API utility
const api = axios.create({
  baseURL: API,
});

export const getAllRestaurants = createAsyncThunk(
  'restaurant/getAllRestaurants',
  async (token, thunkAPI) => {
    try {
      const response = await api.get('/api/restaurants', {
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
      const { data } = await api.get('/api/admin/restaurants/user', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log("Get restaurant by user ID:", data);
      return data;
    } catch (error) {
      console.error('Fetch the restaurant owned by the user error:', error.message);
      throw error;
    }
  }
);

export const getRestaurantById = createAsyncThunk(
  'restaurant/getRestaurantById',
  async ({ id, jwt }, thunkAPI) => {
    try {
      const { data } = await api.get(`/api/restaurants/${id}`, {
        headers: {
          Authorization: `Bearer ${jwt}`
        }
      });
      console.log("Get restaurant by ID:", data);
      return data;
    } catch (error) {
      console.error('Fetch the restaurant by ID error:', error.message);
      throw error;
    }
  }
);

export const createRestaurant = createAsyncThunk(
  'restaurant/createRestaurant',
  async ({ req, jwt }, thunkAPI) => {
    try {
      console.log('Data received:', req);
      const response = await axios.post('http://localhost:5454/api/restaurants', req, {
        headers: {
          Authorization: `Bearer ${jwt}`,
          'Content-Type': 'application/json', // Ensure Content-Type is set correctly
        },
      });
      console.log('Created:', response.data);
      return response.data;
    } catch (error) {
      console.error('Failed to create the restaurant:', error.message);
      if (error.response) {
        console.error('Error response data:', error.response.data);
        console.error('Error response status:', error.response.status);
      }
      // Return a rejected action with the error message
      return thunkAPI.rejectWithValue(error.response ? error.response.data : error.message);
    }
  }
);




export const updateRestaurant = createAsyncThunk(
  'restaurant/updateRestaurant',
  async ({ reqData, restaurantId, jwt }, thunkAPI) => {
    try {
      console.log('Data received:', reqData);
      const response = await api.put(`/api/admin/restaurants/${restaurantId}`, reqData, {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      });
      console.log("Updated:", response.data);
      return response.data;
    } catch (error) {
      console.error('Failed to update the restaurant:', error.message);
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const deleteRestaurant = createAsyncThunk(
  'restaurant/deleteRestaurant',
  async ({ restaurantId, jwt }, thunkAPI) => {
    try {
      await api.delete(`/api/admin/restaurants/${restaurantId}`, {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      });
      console.log("Deleted:", restaurantId);
      return restaurantId;
    } catch (error) {
      console.error('Failed to delete the restaurant:', error.message);
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const updateRestaurantStatus = createAsyncThunk(
  'restaurant/updateRestaurantStatus',
  async ({ restaurantId, jwt }, thunkAPI) => {
    try {
      const res = await api.put(`/api/admin/restaurants/${restaurantId}/status`, {}, {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      });
      console.log("Updated Status:", res.data);
      return res.data;
    } catch (error) {
      console.log("Update status error:", error);
      throw error;
    }
  }
);

export const createRestaurantEvent = createAsyncThunk(
  'restaurant/createRestaurantEvent',
  async ({ data, jwt, restaurantId }, thunkAPI) => {
    try {
      const res = await axios.post(`${API}/api/admin/events/restaurant/${restaurantId}`, data, {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      });
      console.log("Created Event:", res.data);
      return res.data;
    } catch (error) {
      console.log("Create event error:", error);
      throw error;
    }
  }
);

export const getAllEvent = createAsyncThunk(
  'restaurant/getAllEvent',
  async ({ jwt }, thunkAPI) => {
    try {
      const res = await api.get('/api/events', {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      });
      console.log("All Events:", res.data);
      return res.data;
    } catch (error) {
      console.log("Get all events error:", error);
      throw error;
    }
  }
);

export const deleteEvent = createAsyncThunk(
  'restaurant/deleteEvent',
  async ({ jwt, eventId }, thunkAPI) => {
    try {
      const res = await api.delete(`/api/admin/events/${eventId}`, {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      });
      console.log("Deleted Event:", res.data);
      return eventId;
    } catch (error) {
      console.log("Delete event error:", error);
      throw error;
    }
  }
);

export const getAllRestaurantEvents = createAsyncThunk(
  'restaurant/getAllRestaurantEvents',
  async ({ jwt, restaurantId }, thunkAPI) => {
    try {
      const res = await api.get(`/api/admin/events/restaurant/${restaurantId}`, {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      });
      console.log("Restaurant Events:", res.data);
      return res.data;
    } catch (error) {
      console.log("Get restaurant events error:", error);
      throw error;
    }
  }
);

export const createCategory = createAsyncThunk(
  'restaurant/createCategory',
  async ({ jwt, reqData }, thunkAPI) => {
    try {
      const res = await api.post('/api/admin/category', reqData, {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      });
      console.log("Created Category:", res.data);
      return res.data;
    } catch (error) {
      console.log("Create category error:", error);
      throw error;
    }
  }
);

export const getRestaurantsCategory = createAsyncThunk(
  'restaurant/getRestaurantsCategory',
  async ({ jwt, restaurantId }, thunkAPI) => {
    try {
     
      const res = await api.get(`/api/category/restaurant/${restaurantId}`, {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      });
      console.log('Received categories', res.data);
      return res.data;
    } catch (error) {
      console.error('Error fetching categories', error);
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
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Get all restaurants
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

      // Get restaurant by user ID
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

      // Get restaurant by ID
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

      // Create restaurant
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
        state.error = action.error.message || action.error.toString();
      })

      // Update restaurant
      .addCase(updateRestaurant.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateRestaurant.fulfilled, (state, action) => {
        state.loading = false;
        state.userRestaurant = action.payload;
        state.restaurants = state.restaurants.map((restaurant) => 
          restaurant.id === action.payload.id ? action.payload : restaurant
        );
      })
      .addCase(updateRestaurant.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || action.error;
      })

      // Delete restaurant
      .addCase(deleteRestaurant.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteRestaurant.fulfilled, (state, action) => {
        state.loading = false;
        state.restaurants = state.restaurants.filter(
          (restaurant) => restaurant.id !== action.payload
        );
      })
      .addCase(deleteRestaurant.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || action.error;
      })

      // Update restaurant status
      .addCase(updateRestaurantStatus.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateRestaurantStatus.fulfilled, (state, action) => {
        state.loading = false;
        state.userRestaurant = action.payload;
      })
      .addCase(updateRestaurantStatus.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || action.error;
      })

      // Create restaurant event
      .addCase(createRestaurantEvent.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createRestaurantEvent.fulfilled, (state, action) => {
        state.loading = false;
        state.events.push(action.payload);
      })
      .addCase(createRestaurantEvent.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || action.error;
      })

      // Get all events
      .addCase(getAllEvent.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAllEvent.fulfilled, (state, action) => {
        state.loading = false;
        state.events = action.payload;
      })
      .addCase(getAllEvent.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || action.error;
      })

      // Delete event
      .addCase(deleteEvent.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteEvent.fulfilled, (state, action) => {
        state.loading = false;
        state.events = state.events.filter(
          (event) => event.id !== action.payload
        );
      })
      .addCase(deleteEvent.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || action.error;
      })

      // Get all restaurant events
      .addCase(getAllRestaurantEvents.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAllRestaurantEvents.fulfilled, (state, action) => {
        state.loading = false;
        state.restaurantEvents = action.payload;
      })
      .addCase(getAllRestaurantEvents.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || action.error;
      })

      // Create category
      .addCase(createCategory.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createCategory.fulfilled, (state, action) => {
        state.loading = false;
        state.categories.push(action.payload);
      })
      .addCase(createCategory.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || action.error;
      })

      // Get restaurant categories
      .addCase(getRestaurantsCategory.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getRestaurantsCategory.fulfilled, (state, action) => {
        state.loading = false;
        state.categories = action.payload;
      })
      .addCase(getRestaurantsCategory.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || action.error;
      });
  },
});

export const { } = restaurantSlice.actions;

export default restaurantSlice.reducer;
