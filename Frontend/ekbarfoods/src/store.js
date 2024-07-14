import { configureStore } from '@reduxjs/toolkit';
import authReducer from './Components/State/Authentication/Reducer';
import restaurantReducer from './State/restaurantSlice';
import orderReducer from './State/orderSlice';
import ingredinetReducer from './State/ingredientSlice';


export const store = configureStore({
  reducer: {
    auth: authReducer,
    restaurant: restaurantReducer,
    order:orderReducer,
    ingredient:ingredinetReducer,
    
  },
});

export default store;
