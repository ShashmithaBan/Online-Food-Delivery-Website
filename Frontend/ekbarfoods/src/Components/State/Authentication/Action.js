import { type } from "@testing-library/user-event/dist/type"
import { ADD_TO_FAVOURITE_FAILURE, ADD_TO_FAVOURITE_REQUEST, ADD_TO_FAVOURITE_SUCCESS, GET_USER_FAILURE, GET_USER_REQUEST, GET_USER_SUCCESS, LOGIN_FAILURE, LOGIN_REQUEST, LOGOUT, REGISTER_FAILURE, REGISTER_REQUEST, REGISTER_SUCCESS } from "./ActionType"
import axios from "axios"
import { API_URL, api } from "../../Config/api"


export const registerUser=(reqData)=>async(dispatch)=>{
    dispatch({type:REGISTER_REQUEST})
    try {
            const{data} = await axios.post(`${API_URL}/auth/signup`,reqData.userData);
            if(data.jwt)localStorage.setItem("jwt",data.jwt)
            if(data.role==="ROLE_RESTAURANT_OWNER"){
                reqData.navigate("/admin/restaurant")
            }else{
                reqData.navigate("/")
            }
        dispatch({
            type:REGISTER_SUCCESS,payload:data.jwt
        })
        console.log("Register success",data)
    } catch(error) {
        dispatch({
            type:REGISTER_FAILURE,payload:error
        })
        console.log("error",error)
    }
}
export const loginUser=(reqData)=>async(dispatch)=>{  
    dispatch({type:LOGIN_REQUEST})
    try {
            const{data} = await axios.post(`${API_URL}/auth/signin`,reqData.userData);
            if(data.jwt)localStorage.setItem("jwt",data.jwt)
            if(data.role==="ROLE_RESTAURANT_OWNER"){
                reqData.navigate("/admin/restaurant")
            }else{
                reqData.navigate("/")
            } 
        dispatch({
            type:REGISTER_SUCCESS,payload:data.jwt
        })
        console.log("login success",data)
    } catch(error) {
        dispatch({
            type:LOGIN_FAILURE,payload:error
        })
        console.log("error",error)
    }
}
export const getUser=(jwt)=>async(dispatch)=>{ 
    dispatch({type:GET_USER_REQUEST})
    try {
            const{data} = await api.get(`/api/users/profile`,{
                        headers:{
                            Authorization:`Bearer ${jwt}`
                        }
            });
            
        dispatch({
            type:GET_USER_SUCCESS,payload:data
        })
        console.log("user profile",data)
    } catch(error) {
        dispatch({
            type:GET_USER_FAILURE,payload:error
        })
        console.log("error",error)
    }
}
export const addToFavourite=({jwt,restaurantId})=>async(dispatch)=>{
    dispatch({type:ADD_TO_FAVOURITE_REQUEST})
    try {
            const{data} = await api.put(`/api/restaurants/${restaurantId}/add-favorites`,{},{
                        headers:{ 
                            Authorization:`Bearer ${jwt}`
                        }
            });
            
        dispatch({ 
            type:ADD_TO_FAVOURITE_SUCCESS,payload:data
        })
        console.log("added  to favourite",data)
    } catch(error) {
        dispatch({
            type:ADD_TO_FAVOURITE_FAILURE,payload:error
        })
        console.log("error",error)
    }
}
export const logout=()=>async(dispatch)=>{
     
    try {
         localStorage.clear()   
            
        dispatch({
            type:LOGOUT
        })
        console.log("logout success")
    } catch(error) {
        console.log("error",error)
    }
}
