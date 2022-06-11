import { createSlice } from "@reduxjs/toolkit";
import data from "../../data/ProductsData";

const initialState = {
    cartItems: [],
    amount: 0,
    total: 0,
    isLoading: false
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers:{

        addItem: (state, action) => {
            let flag = false;  
            const items = state.cartItems.map(item => {
                if(item.id == action.payload.id){
                    flag = true;
                    return {...item, amount: item.amount + action.payload.amount}
                }
                return item;
            })
            if(flag){
                state.cartItems = items;
            } else {
                const newItem = data.filter(item => item.id == action.payload.id)
                newItem[0].amount = action.payload.amount;
                state.cartItems = [...state.cartItems, newItem[0]]
            }
        },  
        
        removeItem:(state, action) => {
            state.cartItems = state.cartItems.filter(item => item.id != action.payload)
        },
        
        decreaseItem:(state, action) => {
            const newItems = state.cartItems.map(item => {
                if(item.id == action.payload){
                    return {...item, amount: item.amount - 1}
                }
                return item;
            }).filter(item => item.amount > 0)
            state.cartItems = newItems
        },

        increaseItem:(state, action) => {
            const newItems = state.cartItems.map(item => {
                if(item.id == action.payload){
                    return {...item, amount: item.amount + 1}
                }
                return item;
            })
            state.cartItems = newItems
        },

        getTotalAmount: (state) => {
            let {amount, total} = state.cartItems.reduce((a, c) => {
                a.amount += c.amount;
                a.total += c.amount * c.price;
                return a
            },{amount: 0, total: 0})
    
            state.amount = amount
            state.total = total
        }
    }
})

export const {removeItem, increaseItem, decreaseItem, getTotalAmount, addItem} = cartSlice.actions;
export default cartSlice.reducer