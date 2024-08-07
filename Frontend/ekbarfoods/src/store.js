import { configureStore } from '@reduxjs/toolkit';
import authReducer from './Components/State/Authentication/Reducer';
import restaurantReducer from './State/restaurantSlice';
import orderReducer from './State/orderSlice';
import ingredinetReducer from './State/ingredientSlice';
import menuReducer from './State/menuSlice';


export const store = configureStore({
  reducer: {
    auth: authReducer,
    restaurant: restaurantReducer,
    order:orderReducer,
    ingredient:ingredinetReducer,
    menu:menuReducer,
  },
});

export default store;
