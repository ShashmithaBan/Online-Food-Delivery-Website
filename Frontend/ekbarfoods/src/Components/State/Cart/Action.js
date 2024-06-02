import { ADD_ITEM_TO_CART_FAILURE, ADD_ITEM_TO_CART_REQUEST, ADD_ITEM_TO_CART_SUCCESS, CLEAR_CART_FAILURE, CLEAR_CART_REQUEST, CLEAR_CART_SUCCESS, DELETE_CART_ITEM_FAILURE, DELETE_CART_ITEM_REQUEST, DELETE_CART_ITEM_SUCCESS, FIND_CART_FAILURE, FIND_CART_REQUEST, FIND_CART_SUCCESS, GET_ALL_CART_ITEM_FAILURE, GET_ALL_CART_ITEM_REQUEST, GET_ALL_CART_ITEM_SUCCESS, UPDATE_CART_ITEM_QUANTITY_FAILURE, UPDATE_CART_ITEM_QUANTITY_REQUEST, UPDATE_CART_ITEM_QUANTITY_SUCCESS } from "./ActionType"
import { api } from "../../Config/api"


export const findCart = (token) =>{
    return async(dispatch)=>{
        dispatch({type:FIND_CART_REQUEST})
        try {
            const response = await api.get('/api/cart',
                {
                    headers:{
                        Authorization:`Bearer ${token}`,
                    }
                },
            );
            dispatch({type:FIND_CART_SUCCESS , payload:response.data})
        } catch (error) {
            console.log("catch error" ,error)
            dispatch({type:FIND_CART_FAILURE , payload:error})
        }
    }
}

export const getAllCartItems = (reqData) =>{
    return async(dispatch)=>{
        dispatch({type:GET_ALL_CART_ITEM_REQUEST})
        try {
            const response = await api.get(`/api/carts/${reqData.cartId}/items`,
                {
                    headers:{
                        Authorization:`Bearer ${reqData.token}`,
                    }
                },
            );
            dispatch({type:GET_ALL_CART_ITEM_SUCCESS , payload:response.data})
        } catch (error) {
            console.log("catch error" ,error)
            dispatch({type:GET_ALL_CART_ITEM_FAILURE , payload:error})
        }
    }
}

export const addItemToCart = (reqData) =>{
    return async(dispatch)=>{
        dispatch({type:ADD_ITEM_TO_CART_REQUEST})
        try {
            const {data}= await api.post(`/api/cart/add`,reqData.cartItem,
                {
                    headers:{
                        Authorization:`Bearer ${reqData.token}`,
                    }
                },
            );
            console.log('added an item to cart' , data)
            dispatch({type:ADD_ITEM_TO_CART_SUCCESS , payload:data})
        } catch (error) {
            console.log("catch error" ,error)
            dispatch({type:ADD_ITEM_TO_CART_FAILURE , payload:error})
        }
    }
}

export const updateCartItem = (reqData) =>{
    return async(dispatch)=>{
        dispatch({type:UPDATE_CART_ITEM_QUANTITY_REQUEST})
        try {
            const {data}= await api.put(`/api/cart/add`,reqData.data,
                {
                    headers:{
                        Authorization:`Bearer ${reqData.token}`,
                    }
                },
            );
            console.log('updated the item' , data)
            dispatch({type:UPDATE_CART_ITEM_QUANTITY_SUCCESS , payload:data})
        } catch (error) {
            console.log("catch error" ,error)
            dispatch({type:UPDATE_CART_ITEM_QUANTITY_FAILURE , payload:error})
        }
    }
}

export const removeCartItem = ({cartItemId,jwt}) =>{
    return async(dispatch)=>{
        dispatch({type:DELETE_CART_ITEM_REQUEST})
        try {
            const {data}= await api.delete(`/api/cart-item/${cartItemId}/remove`,
                {
                    headers:{
                        Authorization:`Bearer ${jwt}`,
                    }
                },
            );
            console.log('remove cartitem' , data)
            dispatch({type:DELETE_CART_ITEM_SUCCESS , payload:cartItemId})
        } catch (error) {
            console.log("catch error" ,error)
            dispatch({type:DELETE_CART_ITEM_FAILURE , payload:error})
        }
    }
}

export const clearCart = () =>{
    return async(dispatch)=>{
        dispatch({type:CLEAR_CART_REQUEST})
        try {
            const {data}= await api.put(`/api/cart/clear`,{},
                {
                    headers:{
                        Authorization:`Bearer ${localStorage.getItem("jwt")}`,
                    }
                },
            );
            console.log('clear cart' , data)
            dispatch({type:CLEAR_CART_SUCCESS , payload:data})
        } catch (error) {
            console.log("catch error" ,error)
            dispatch({type:CLEAR_CART_FAILURE , payload:error})
        }
    }
}