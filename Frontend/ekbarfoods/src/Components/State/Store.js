import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { authReducer } from "./Authentication/Reducer";
import { thunk } from "redux-thunk";
import restaurantReducer from "./Restaurant/Reducer";
import { menuItemReducer } from "./Menu/Reducer";
import { cartReducer } from "./Cart/Reducer";

const rooteReducer = combineReducers({
    auth:authReducer,
    restaurant:restaurantReducer,
    menuItem:menuItemReducer,
    cart:cartReducer,
})

export const store = legacy_createStore(rooteReducer,applyMiddleware(thunk));