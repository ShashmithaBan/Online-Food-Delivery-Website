import { GET_RESTAURANT_OREDER_FAILURE, GET_RESTAURANT_OREDER_REQUEST, GET_RESTAURANT_OREDER_SUCCESS, UPDATE_ORDER_STATUS_FAILURE, UPDATE_ORDER_STATUS_REQUEST, UPDATE_ORDER_STATUS_SUCCESS } from "./ActionType"
import { api } from "../../Config/api"


export const updateOrderStatus = ({orderId , orderStatus , jwt}) => {
    return async(dispatch)=>{
        dispatch({type:UPDATE_ORDER_STATUS_REQUEST})
        try {
            const response = await api.put(`/api/admin/order/${orderId}/${orderStatus}` , {} , {
                headers:{
                    Authorization:`Bearer ${jwt}`
                }
            })
            const updateOrder = response.data
            console.log("updated the order status" , updateOrder)
            dispatch({type:UPDATE_ORDER_STATUS_SUCCESS , payload:updateOrder})
            
        } catch (error) {
            console.log("catch error" , error)
            dispatch({type:UPDATE_ORDER_STATUS_FAILURE , payload:error})
        }
    }
}

export const getRestaurantOrders = ({restaurantId , orderStatus , jwt}) => {
    return async(dispatch)=>{
        dispatch({type:GET_RESTAURANT_OREDER_REQUEST})
        try {
            const {data}= await api.get(`/api/admin/order/restaurant/${restaurantId}` , {
                params:{orderStatus:orderStatus},
                headers:{
                    Authorization:`Bearer ${jwt}`
                }
            })
            const orders = data
            console.log("restaurant_order--" , orders)
            dispatch({type:GET_RESTAURANT_OREDER_SUCCESS, payload:orders})
            
        } catch (error) {
            console.log("catch error" , error)
            dispatch({type:GET_RESTAURANT_OREDER_FAILURE , payload:error})
        }
    }
}