import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import authReducer from './authSlice';
import { restaurantApi } from './Features/apiSlice'; // Import your API

export const store = configureStore({
  reducer: {
    auth: authReducer,
    [restaurantApi.reducerPath]: restaurantApi.reducer, // Add the API reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(restaurantApi.middleware), // Add the API middleware
});

// Enable automatic refetching of queries
setupListeners(store.dispatch);

export default store;
