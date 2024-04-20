import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
    name: "Cart",
    initialState:{
        basket:[],
        user:null,

    },
    reducers:{
        addItem: (state,action)=>{state.basket.push(action.payload)},
        removeItem: (state, action) => {
           
           const index=state.basket.findIndex(
            (basketItem)=>basketItem.id === action.payload.itemId
           );
           let newBasket= [...state.basket];
           if(index>=0){
                newBasket.splice(index,1)
           }else{
            console.log(`cant Remove Product of this id:${action.id}`)
           }
           return{
            ...state,
            basket:newBasket
           }
            
        
           
        },
        set_user:(state,action)=>{
            
            state.user= action.payload.email},
        
            // const id=action.payload
            // const newBasket=state.basket.filter((item)=>item.id !== id);  
            // console.log(newBasket)
          
        //clearCart: (state,action)=>{state.basket[""]},
    },
})

export default CartSlice.reducer;

export const {addItem,removeItem,set_user} = CartSlice.actions;


