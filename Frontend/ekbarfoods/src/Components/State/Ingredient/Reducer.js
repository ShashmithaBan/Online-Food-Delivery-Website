import { CREATE_INGREDIENTS_SUCCESS, CREATE_INGREDIENT_CATEGORY_SUCCESS, GET_INGREDIENTS, GET_INGREDIENT_CATEGORY_SUCCESS, UPDATE_STOCK } from "./ActionType";

const initialState = {
    ingredients: [],
    update: null,
    category: []
};

export const ingredientReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_INGREDIENTS:
            return {
                ...state,
                ingredients: action.payload,
            };
        case GET_INGREDIENT_CATEGORY_SUCCESS:
            return {
                ...state,
                category: action.payload,
            };
        case CREATE_INGREDIENT_CATEGORY_SUCCESS:
            return {
                ...state,
                category: [...state.category, action.payload]
            };
        case CREATE_INGREDIENTS_SUCCESS:
            return {
                ...state,
                ingredients: [...state.ingredients, action.payload]
            };
        case UPDATE_STOCK:
            console.log("Updating stock for ingredient:", action.payload);
            return {
                ...state,
                update: action.payload,
                ingredients: state.ingredients.map((item) =>
                    item.id === action.payload.id ? { ...item, ...action.payload } : item
                )
            };
        default:
            return state;
    }
};
