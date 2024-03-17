import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
    name: "Cart",
    initialState:{
        basket:[],
    },
    reducers:{
        addItem: (state,action)=>{state.basket.push(action.payload)},
        removeItem: (state,action)=>{state.basket.pop()},
        //clearCart: (state,action)=>{state.basket[""]},
    },
})

export default CartSlice.reducer;

export const {addItem,removeItem} = CartSlice.actions;


