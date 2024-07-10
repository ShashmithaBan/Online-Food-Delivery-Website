import { configureStore } from '@reduxjs/toolkit';
import authReducer from './Components/State/Authentication/Reducer';
import restaurantReducer from './State/restaurantSlice';
import orderReducer from './State/orderSlice';
import { menuItemReducer } from './Components/State/Menu/Reducer';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    restaurant: restaurantReducer,
    orders:orderReducer,
    menu:menuItemReducer,
  },
});

export default store;
