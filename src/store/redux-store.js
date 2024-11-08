import { configureStore, createSlice } from "@reduxjs/toolkit"


const initalCart={toggleCart:false}

const cartSlice=createSlice({
    name:'cart',
    initialState:initalCart,
    reducers:{
        toggleCartButton(state){
            state.toggleCart=!state.toggleCart
        }
    }
})

const store=configureStore({
    reducer:{
        cart:cartSlice.reducer,
    }
})

export const cartActions=cartSlice.actions; 

export default store