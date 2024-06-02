import { GET_RESTAURANT_OREDER_FAILURE, GET_RESTAURANT_OREDER_REQUEST, GET_RESTAURANT_OREDER_SUCCESS, UPDATE_ORDER_STATUS_FAILURE, UPDATE_ORDER_STATUS_REQUEST, UPDATE_ORDER_STATUS_SUCCESS } from "./ActionType";

const initialState = {
    loading:false,
    error:null,
    orders:[]

}

export const restaurantOrderReducer = (state=initialState , action) =>{
    switch (action.type) {
        case GET_RESTAURANT_OREDER_REQUEST:
        case UPDATE_ORDER_STATUS_REQUEST:
            return{
                ...state,
                loading:true,
                error:null
            };
        case GET_RESTAURANT_OREDER_SUCCESS:
            return{
                ...state,
                loading:false,
                orders:action.payload
            }  ;  
        case UPDATE_ORDER_STATUS_SUCCESS:
            const updatedOrders = state.orders.map((order)=>
            order.id === action.payload.id?action.payload:order
            )
            return{
                ...state,
                loading:false,
                orders:updatedOrders
            }  ;  
        case GET_RESTAURANT_OREDER_FAILURE:
        case UPDATE_ORDER_STATUS_FAILURE:
            return{
                ...state,
                loading:false,
                error:action.error
            }
    
        default:
            return state;
    }
}