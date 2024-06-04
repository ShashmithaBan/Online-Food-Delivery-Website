import { api } from "../../Config/api"
import { CREATE_CATEGORY_FAILURE, CREATE_CATEGORY_REQUEST, CREATE_CATEGORY_SUCCESS, CREATE_EVENT_FAILURE, CREATE_EVENT_REQUEST, CREATE_EVENT_SUCCESS, CREATE_RESTAURANT_FAILURE, CREATE_RESTAURANT_REQUEST, CREATE_RESTAURANT_SUCCESS, DELETE_EVENT_FAILURE, DELETE_EVENT_REQUEST, DELETE_EVENT_SUCCESS, DELETE_RESTAURANT_FAILURE, DELETE_RESTAURANT_REQUEST, DELETE_RESTAURANT_SUCCESS, GET_ALL_EVENT_FAILURE, GET_ALL_EVENT_REQUEST, GET_ALL_EVENT_SUCCESS, GET_ALL_RESTAURANT_FAILURE, GET_ALL_RESTAURANT_REQUEST, GET_ALL_RESTAURANT_SUCCESS, GET_RESTARANT_BY_ID_FAILURE, GET_RESTARANT_BY_ID_REQUEST, GET_RESTARANT_BY_ID_SUCCESS, GET_RESTARANT_BY_USER_ID_FAILURE, GET_RESTARANT_BY_USER_ID_REQUEST, GET_RESTARANT_BY_USER_ID_SUCCESS, GET_RESTAURANT_CATEGORY_FAILURE, GET_RESTAURANT_CATEGORY_REQUEST, GET_RESTAURANT_CATEGORY_SUCCESS, GET_RESTAURANT_EVENT_FAILURE, GET_RESTAURANT_EVENT_REQUEST, GET_RESTAURANT_EVENT_SUCCESS, UPDATE_RESTAURANT_FAILURE, UPDATE_RESTAURANT_REQUEST, UPDATE_RESTAURANT_STATUS_FAILURE, UPDATE_RESTAURANT_STATUS_REQUEST, UPDATE_RESTAURANT_STATUS_SUCCESS, UPDATE_RESTAURANT_SUCCESS } from "./ActionType"


export const getAllRestaurants = (token) =>{
    return async (dispatch) =>{
        dispatch({type:GET_ALL_RESTAURANT_REQUEST})
        try {
            const {data} = await api.get('/api/restaurants' ,
            {
                headers:{
                    Authorization:`Bearer ${token}`
                }
    }
            );
            dispatch({type:GET_ALL_RESTAURANT_SUCCESS,payload:data})
            console.log("all restaurant",data )
        } catch (error) {
            console.log("catch error" , error)
            dispatch({type:GET_ALL_RESTAURANT_FAILURE,payload:error})
        }
    }
}

export const getRestaurantById = (reqData) =>{
    return async(dispatch) =>{
        dispatch({type:GET_RESTARANT_BY_ID_REQUEST});
        try{const {data} = await api.get(`/api/restaurants/${reqData.restaurantId}`,
            {
                headers:{
                    Authorization:`Bearer ${reqData.jwt}`
                }
            }
        );
        dispatch({type:GET_RESTARANT_BY_ID_SUCCESS , payload:data});
        console.log("retaurant" , data)
} catch(error){
    console.log('catch error' , error)
    dispatch({type:GET_RESTARANT_BY_ID_FAILURE , payload:error});
}
    }
}

export const getRestaurantByUserId = (jwt) =>{
    return async (dispatch) =>{
        dispatch({type:GET_RESTARANT_BY_USER_ID_REQUEST})
        try {
            const {data }= await api.get('/api/admin/restaurants/user',
                {headers:{
                    Authorization:`Bearer ${jwt}`
                }
            });
            console.log("get restaurant by userid",data )
            dispatch({type:GET_RESTARANT_BY_USER_ID_SUCCESS , payload:data})
            
        } catch (error) {
            console.log("catch error", error)
            dispatch({type:GET_RESTARANT_BY_USER_ID_FAILURE,payload:error})
        }
    }
}

export const createRestaurant = (reqData) => {
    console.log("token--------" , reqData.token)
    return async(dispatch)=>{
        
    dispatch({type:CREATE_RESTAURANT_REQUEST})
    try {
        const res = await api.post('/api/admin/restaurants',reqData.data,{
            headers:{
                Authorization:`Bearer ${reqData.token}`,
            },
        })
        dispatch({type:CREATE_RESTAURANT_SUCCESS,payload:res.data})
    } catch (error) {
        console.log("catch error",error)
        dispatch({type:CREATE_RESTAURANT_FAILURE,payload:error})
        
    }
}}

export const updateRestaurant = ({restaurantId,restaurantData , jwt}) => {

    return async(dispatch)=>{
        
    dispatch({type:UPDATE_RESTAURANT_REQUEST})
    try {
        const res = await api.put(`/api/admin/restaurants/${restaurantId}`,restaurantData,{
            headers:{
                Authorization:`Bearer ${jwt}`,
            },
        })
        dispatch({type:UPDATE_RESTAURANT_SUCCESS,payload:res.data})
    } catch (error) {
        console.log("catch error",error)
        dispatch({type:UPDATE_RESTAURANT_FAILURE,payload:error})
        
    }
}}

export const deleteRestaurant = ({restaurantId, jwt}) => {

    return async(dispatch)=>{
        
    dispatch({type:DELETE_RESTAURANT_REQUEST})
    try {
        const res = await api.delete(`/api/admin/restaurants/${restaurantId}`,{
            headers:{
                Authorization:`Bearer ${jwt}`,
            },
        })
        dispatch({type:DELETE_RESTAURANT_SUCCESS,payload:restaurantId})
    } catch (error) {
        console.log("catch error",error)
        dispatch({type:DELETE_RESTAURANT_FAILURE,payload:error})
        
    }
}}

export const updateRestaurantStatus = ({restaurantId, jwt}) => {

    return async(dispatch)=>{
        
    dispatch({type:UPDATE_RESTAURANT_STATUS_REQUEST})
    try {
        const res = await api.put(`/api/admin/restaurants/${restaurantId}/status`,{},{//withing putmapping there should be body .its doesnt matter whether its empty
            headers:{
                Authorization:`Bearer ${jwt}`,
            },
        })
        console.log("ress",res.data);
        dispatch({type:UPDATE_RESTAURANT_STATUS_SUCCESS,payload:res.data})
    } catch (error) {
        console.log("catch error",error)
        dispatch({type:UPDATE_RESTAURANT_STATUS_FAILURE,payload:error})
        
    }
}}

export const createRestaurantEvent = ({data , jwt , restaurantId}) => {
    
    return async(dispatch)=>{
        
    dispatch({type:CREATE_EVENT_REQUEST})
    try {
        const res = await api.post(`/api/admin/events/restaurant/${restaurantId}`,data,{
            headers:{
                Authorization:`Bearer ${jwt}`,
            },
        });
        console.log("create events", res.data)
        dispatch({type:CREATE_EVENT_SUCCESS,payload:res.data})
    } catch (error) {
        console.log("catch error",error)
        dispatch({type:CREATE_EVENT_FAILURE,payload:error})
        
    }
}}

export const getAllEvent = ( {jwt }) => {
    
    return async(dispatch)=>{
        
    dispatch({type:GET_ALL_EVENT_REQUEST})
    try {
        const res = await api.get(`/api/events`,{
            headers:{
                Authorization:`Bearer ${jwt}`,
            },
        });
        console.log("create events", res.data)
        dispatch({type:GET_ALL_EVENT_SUCCESS,payload:res.data})
    } catch (error) {
        console.log("catch error",error)
        dispatch({type:GET_ALL_EVENT_FAILURE,payload:error})
        
    }
}}

export const deleteEvent = ( {jwt , eventId}) => {
    
    return async(dispatch)=>{
        
    dispatch({type:DELETE_EVENT_REQUEST})
    try {
        const res = await api.delete(`/api/admin/events/${eventId}`,{
            headers:{
                Authorization:`Bearer ${jwt}`,
            },
        });
        console.log("delete events", res.data)
        dispatch({type:DELETE_EVENT_SUCCESS,payload:res.data})
    } catch (error) {
        console.log("catch error",error)
        dispatch({type:DELETE_EVENT_FAILURE,payload:error})
        
    }
}}

export const getAllRestarantEvents= ( {jwt , restaurantId}) => {
    
    return async(dispatch)=>{
        
    dispatch({type:GET_RESTAURANT_EVENT_REQUEST})
    try {
        const res = await api.get(`/api/admin/events/restaurant/${restaurantId}`,{
            headers:{
                Authorization:`Bearer ${jwt}`,
            },
        });
   
        dispatch({type:GET_RESTAURANT_EVENT_SUCCESS,payload:res.data})
    } catch (error) {
        console.log("catch error",error)
        dispatch({type:GET_RESTAURANT_EVENT_FAILURE,payload:error})
        
    }
}}

export const createCategory= ( {jwt , reqData}) => {
    
    return async(dispatch)=>{
        
    dispatch({type:CREATE_CATEGORY_REQUEST})
    try {
        const res = await api.post(`/api/admin/category`,reqData, {
            headers:{
                Authorization:`Bearer ${jwt}`,
            },
        });
        console.log("create category", res.data)
        dispatch({type:CREATE_CATEGORY_SUCCESS,payload:res.data})
    } catch (error) {
        console.log("catch error",error)
        dispatch({type:CREATE_CATEGORY_FAILURE,payload:error})
        
    }
}}

export const getResttaurantsCategory= ({jwt , restaurantId}) => {
    
    return async(dispatch)=>{
        
    dispatch({type:GET_RESTAURANT_CATEGORY_REQUEST})
    try {
        const res = await api.get(`/api/category/restaurant/${restaurantId}`, {
            headers:{
                Authorization:`Bearer ${jwt}`,
            },
        });
        console.log("create category", res.data)
        dispatch({type:GET_RESTAURANT_CATEGORY_SUCCESS,payload:res.data})
    } catch (error) {
        console.log("catch error",error)
        dispatch({type:GET_RESTAURANT_CATEGORY_FAILURE,payload:error})
        
    }
}}