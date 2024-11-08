import { configureStore, createSlice } from "@reduxjs/toolkit"


const initalCart={toggleCart:false,products:[]}

const cartSlice=createSlice({
    name:'cart',
    initialState:initalCart,
    reducers:{
        toggleCartButton(state){
            state.toggleCart=!state.toggleCart
        },
        addProduct(state,action){
            state.products=[...state.products,action.payload]
        },
        replace(state,action){
            state.products=action.payload
        },
        increaseQuantity(state,action){
            state.products=state.products.map(product=>{
                if(product.id===action.payload){
                    return {...product,quantity:product.quantity+1}
                }
                return product;
        })
        },
        decreaseQuantity(state,action){
            state.products=state.products.map(product=>{
                if(product.id===action.payload){
                    return {...product,quantity:product.quantity-1}
                }
                return product;
        })
        },
        removeProduct(state,action){
            state.products = state.products.filter(product => product.id !== action.payload);
        }
    }
})

const initialUI={notification:null}
const uiSlice=createSlice({
    name:'ui',
    initialState:initialUI,
    reducers:{
        showNotification(state, action) {
            state.notification = {
              status: action.payload.status,
              title: action.payload.title,
              message: action.payload.message,
            };
          },
    }
})

const store=configureStore({
    reducer:{
        cart:cartSlice.reducer,
        ui:uiSlice.reducer,
    }
});



export const cartActions=cartSlice.actions; 
export const uiActions=uiSlice.actions; 

export default store