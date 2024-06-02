import { api } from "../../Config/api";
import { CREATE_OREDER_FAILURE, CREATE_OREDER_REQUEST, CREATE_OREDER_SUCCESS, GET_USERS_NOTIFICATION_FAILURE, GET_USERS_NOTIFICATION_REQUEST, GET_USERS_NOTIFICATION_SUCCESS, GET_USERS_ORDERS_FAILURE, GET_USERS_ORDERS_REQUEST, GET_USERS_ORDERS_SUCCESS } from "./ActionType"


export const createOrder = (reqData) =>{
    return async(dispatch)=>{
        dispatch({type:CREATE_OREDER_REQUEST});
        try {
            const {data} = await api.post("/api/order",reqData.order,{
                headers:{
                    Authorization:`Bearer ${reqData.jwt}`
                }
            });
            console.log("created order data" , data)
           dispatch({type:CREATE_OREDER_SUCCESS, payload:data})

        } catch (error) {
            
            console.log("catch error" , error)
           dispatch({type:CREATE_OREDER_FAILURE, payload:error})
        }
    }
}

export const getUserOrder = (jwt) =>{
    return async(dispatch)=>{
        dispatch({type:GET_USERS_ORDERS_REQUEST});
        try {
            const {data} = await api.get("/api/order/user",{
                headers:{
                    Authorization:`Bearer ${jwt}`
                }
            });
            console.log("users orders" , data)
           dispatch({type:GET_USERS_ORDERS_SUCCESS, payload:data})

        } catch (error) {
            
            console.log("catch error" , error)
           dispatch({type:GET_USERS_ORDERS_FAILURE, payload:error})
        }
    }
}

// export const getUsersNotification = () =>{
//     return async(dispatch)=>{
//         dispatch({type:GET_USERS_NOTIFICATION_REQUEST});
//         try {
//             const {data} = await api.get("/api/notifications");
//             console.log("all notifications" , data)
//            dispatch({type:GET_USERS_NOTIFICATION_SUCCESS, payload:data})

//         } catch (error) {
            
//             console.log("catch error" , error)
//            dispatch({type:GET_USERS_NOTIFICATION_FAILURE, payload:error})
//         }
//     }
// }