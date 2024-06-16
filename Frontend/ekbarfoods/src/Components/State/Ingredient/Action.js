import { api } from "../../Config/api"
import { CREATE_INGREDIENTS_SUCCESS, CREATE_INGREDIENT_CATEGORY_FAILURE, CREATE_INGREDIENT_CATEGORY_SUCCESS, GET_INGREDIENTS, GET_INGREDIENT_CATEGORY_SUCCESS, UPDATE_STOCK } from "./ActionType"

export const getIngredientOfRestaurant = ({id,jwt})=>{
    return async(dispatch)=>{
        try {
            const response = await api.get(`/api/admin/ingredients/restaurant/${id}`,{
                headers:{
                    Authorization: `Bearer ${jwt}`
                }
            })
            console.log("get all ingredients" ,response.data)
            dispatch({type:GET_INGREDIENTS,payload:response.data})
        } catch (error) {
            console.log("error" , error)
        }
    }
}

export const createIngredients = ({data,jwt})=>{
    return async(dispatch)=>{
        try {
            const response = await api.post(`/api/admin/ingredients`,data,{
                headers:{
                    Authorization: `Bearer ${jwt}`
                }
            })
            console.log("create ingredients" ,response.data)
            dispatch({type:CREATE_INGREDIENTS_SUCCESS,payload:response.data})
        } catch (error) {
            console.log("error" , error)
        }
    }
}

export const createIngredientsCategory = ({ data, jwt }) => {
    return async (dispatch) => {
      dispatch({ type: CREATE_INGREDIENT_CATEGORY_SUCCESS });
  
      try {
        console.log('Request payload:', data);
  
        const response = await api.post('/api/admin/ingredients/category', data, {
          headers: {
            Authorization: `Bearer ${jwt}`,
          },
        });
  
        console.log('create ingredients category', response.data);
        dispatch({ type: CREATE_INGREDIENT_CATEGORY_SUCCESS, payload: response.data });
      } catch (error) {
        console.error('Error creating ingredient category:', error);
        dispatch({ type: CREATE_INGREDIENT_CATEGORY_FAILURE, payload: error.message });
      }
    };
  };

export const getIngredientsCategory = ({id,jwt})=>{
    
    return async(dispatch)=>{
        try {
            const response = await api.get(`/api/admin/ingredients/restaurant/${id}/category`,id,{
                headers:{
                    Authorization: `Bearer ${jwt}`
                }
            })
            console.log("get ingredients category" ,response.data)
            dispatch({type:GET_INGREDIENT_CATEGORY_SUCCESS,payload:response.data})
        } catch (error) {
            console.log("error" , error)
        }
    }
}

export const updateStockeofIngredients = ({id,jwt})=>{
    
    return async(dispatch)=>{
        try {
            const {data} = await api.put(`/api/admin/ingredients/${id}/stoke`,data,{
                headers:{
                    Authorization: `Bearer ${jwt}`
                }
            })
            console.log("updated stock" ,data)
            dispatch({type:UPDATE_STOCK,payload:data})
        } catch (error) {
            console.log("error" , error)
        }
    }
}