import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const API = 'http://localhost:5454';


export const getUserOrders = createAsyncThunk(
  'restaurant/getRestaurantByUserId',
  async (token , thunkAPI) => {
    try {
      const {data }= await axios.get(`${API}/api/order/user`,
        {headers:{
            Authorization:`Bearer ${token}`
        }
    });
    console.log("get user order",data )
    } catch (error) {
      console.error('Fetch the restaurant own by the user error:', error.message);
      throw error;
    }
  }
)



export const orderSlice = createSlice({
  name: 'order',
  initialState: {
    loading:false,
 orders:[],
 error:null,
 notifications:[]
  },
  reducers: {
    
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUserOrders.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getUserOrders.fulfilled, (state, action) => {
        state.loading = false;
        state.orders = action.payload;
      })
      .addCase(getUserOrders.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || action.error;
      });
  },
});

export const {  } = orderSlice.actions;

export default orderSlice.reducer;
