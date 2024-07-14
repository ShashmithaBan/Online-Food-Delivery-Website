import { configureStore } from '@reduxjs/toolkit';
import authReducer from './Components/State/Authentication/Reducer';
import restaurantReducer from './State/restaurantSlice';
import orderReducer from './State/orderSlice'


export const store = configureStore({
  reducer: {
    auth: authReducer,
    restaurant: restaurantReducer,
    order:orderReducer
    
  },
});

export default store;
