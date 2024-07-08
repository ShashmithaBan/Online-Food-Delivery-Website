import { configureStore } from '@reduxjs/toolkit';
import authReducer from './Components/State/Authentication/Reducer';
import restaurantReducer from './State/restaurantSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    restaurant: restaurantReducer,
  },
});

export default store;
