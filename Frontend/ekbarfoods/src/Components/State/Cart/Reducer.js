import { ADD_ITEM_TO_CART_SUCCESS, CLEAR_CART_SUCCESS, DELETE_CART_ITEM_FAILURE, DELETE_CART_ITEM_REQUEST, DELETE_CART_ITEM_SUCCESS, FIND_CART_FAILURE, FIND_CART_REQUEST, FIND_CART_SUCCESS, GET_ALL_CART_ITEM_REQUEST, UPDATE_CART_ITEM_QUANTITY_FAILURE, UPDATE_CART_ITEM_QUANTITY_REQUEST, UPDATE_CART_ITEM_QUANTITY_SUCCESS } from "./ActionType";
import {LOGOUT} from '../Authentication/ActionType'
const initialState = {
    cart:null,
    cartItems:[],
    loading:false,
    error:null
}


export const cartReducer = (state= initialState , action)=>{

    switch (action.type) {
        case FIND_CART_REQUEST:
        case GET_ALL_CART_ITEM_REQUEST:
        case DELETE_CART_ITEM_REQUEST:
        case UPDATE_CART_ITEM_QUANTITY_REQUEST:
            return{
                ...state,
                loading:true,
                error:null,
            };
        case FIND_CART_SUCCESS:
        case CLEAR_CART_SUCCESS:
            return{
                ...state,
                loading:false,
                cart:action.payload,
                cartItems:action.payload.items,
            };
        case ADD_ITEM_TO_CART_SUCCESS:
            return{
                    ...state,
                    loading:false,
                    cartItems:[...state.payload , ...state.cartItems]
                };

        case UPDATE_CART_ITEM_QUANTITY_SUCCESS:
             return{
                            ...state,
                            loading:false,
                            cartItems:state.cartItems.map((item)=>
                            item.id === action.payload.id?action.payload:item
                            )
                        };
        case DELETE_CART_ITEM_SUCCESS:
            return{
                ...state,
                loading:false,
                cartItems:state.cartItems.filter((item)=>
                item.id !== action.payload
                )
            };
        case FIND_CART_FAILURE:
        case UPDATE_CART_ITEM_QUANTITY_FAILURE:
        case DELETE_CART_ITEM_FAILURE:
            return{
                ...state,
                loading:false,
                error:action.payload
            };
        case LOGOUT:
            localStorage.removeItem("jwt");
            return{
                ...state,
                cartItems:[],
                cart:null,
                success:"logout success"
            };
    
        default:
            return state;
    }
}