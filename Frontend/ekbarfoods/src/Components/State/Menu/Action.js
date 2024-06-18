import { CREATE_MENU_ITEM_FAILURE, CREATE_MENU_ITEM_REQUEST, CREATE_MENU_ITEM_SUCCESS, DELETE_MENU_ITEM_FAILURE, DELETE_MENU_ITEM_REQUEST, DELETE_MENU_ITEM_SUCCESS, GET_MENU_ITEMS_BY_RESTAURANT_ID_FAILURE, GET_MENU_ITEMS_BY_RESTAURANT_ID_REQUEST, GET_MENU_ITEMS_BY_RESTAURANT_ID_SUCCESS, SEARCH_MENU_ITEM_FAILURE, SEARCH_MENU_ITEM_REQUEST, SEARCH_MENU_ITEM_SUCCESS, UPDATE_MENU_ITEM_AVAILABILITY_FAILURE, UPDATE_MENU_ITEM_AVAILABILITY_REQUEST, UPDATE_MENU_ITEM_AVAILABILITY_SUCCESS, UPDATE_MENU_ITEM_FAILURE, UPDATE_MENU_ITEM_REQUEST, UPDATE_MENU_ITEM_SUCCESS } from "./ActionType"
import { api } from "../../Config/api"



export const createMenuItem = ({reqData,jwt})=>{
    return async(dispatch) =>{
        dispatch({type:CREATE_MENU_ITEM_REQUEST});

        try {
            const {data} = await api.post('/api/admin/food', reqData ,{
                headers:{
                    Authorization:`Bearer ${jwt}`
                }
            })
            console.log("created menu" , data)
            dispatch({type:CREATE_MENU_ITEM_SUCCESS , payload:data})
        } catch (error) {
            console.log("catch error" , error)
            dispatch({type:CREATE_MENU_ITEM_FAILURE , payload:error})
        }
    }
}

export const getMenuItemByRestaurantId = (reqData)=>{
    return async(dispatch) =>{
        dispatch({type:GET_MENU_ITEMS_BY_RESTAURANT_ID_REQUEST});

        try {
            const {data} = await api.get(`api/food/restaurant/${reqData.restaurantId}?vegetarian=${reqData.vegetarian}
            &nonveg=${reqData.nonveg}&seasonal=${reqData.seasonal}&food_category=${reqData.food_category}`,{
               
            })
            console.log("Item of the menu" , data)
            dispatch({type:GET_MENU_ITEMS_BY_RESTAURANT_ID_SUCCESS , payload:data})
        } catch (error) {
            console.log("catch error" , error)
            dispatch({type:GET_MENU_ITEMS_BY_RESTAURANT_ID_FAILURE , payload:error})
        }
    }
}

export const searchMenuItem = ({keyword,jwt})=>{
    return async(dispatch) =>{
        dispatch({type:SEARCH_MENU_ITEM_REQUEST});

        try {
            const {data} = await api.get(`api/food/search?name=${keyword}`,{
                headers:{
                    Authorization:`Bearer ${jwt}`
                }
            })
            console.log("searched items" , data)
            dispatch({type:SEARCH_MENU_ITEM_SUCCESS , payload:data})
        } catch (error) {
            console.log("catch error" , error)
            dispatch({type:SEARCH_MENU_ITEM_FAILURE , payload:error})
        }
    }
}

// export const getAllIngredientsOfMenuItem = (reqData)=>{
//     return async(dispatch) =>{
//         dispatch({type:GET_A});

//         try {
//             const {data} = await api.get(`api/food/search?name=${keyword}`,{
//                 headers:{
//                     Authorization:`Bearer ${jwt}`
//                 }
//             })
//             console.log("searched items" , data)
//             dispatch({type:SEARCH_MENU_ITEM_SUCCESS , payload:data})
//         } catch (error) {
//             console.log("catch error" , error)
//             dispatch({type:SEARCH_MENU_ITEM_FAILURE , payload:error})
//         }
//     }
// }

export const updateMenuItemsAvailability = ({foodId,jwt})=>{
    return async(dispatch) =>{
        dispatch({type:UPDATE_MENU_ITEM_AVAILABILITY_REQUEST});

        try {
            const {data} = await api.put(`api/admin/food/${foodId}/status`,{},{
                headers:{
                    Authorization:`Bearer ${jwt}`
                }
            })
            console.log("updated menu items availability" , data)
            dispatch({type:UPDATE_MENU_ITEM_AVAILABILITY_SUCCESS , payload:data})
        } catch (error) {
            console.log("catch error" , error)
            dispatch({type:UPDATE_MENU_ITEM_AVAILABILITY_FAILURE , payload:error})
        }
    }
}

export const deleteMenuItem = ({foodId,jwt})=>{
    return async(dispatch) =>{
        dispatch({type:DELETE_MENU_ITEM_REQUEST});

        try {
            const {data} = await api.delete(`api/admin/food/${foodId}`,{
                headers:{
                    Authorization:`Bearer ${jwt}`
                }
            })
            console.log("delete food" , data)
            dispatch({type:DELETE_MENU_ITEM_SUCCESS , payload: foodId})
        } catch (error) {
            console.log("catch error" , error)
            dispatch({type:DELETE_MENU_ITEM_FAILURE , payload:error})
        }
    }
}
