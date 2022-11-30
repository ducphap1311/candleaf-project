import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import data from "../../data/ProductsData";

const initialState = {
    cartItems: [],
    amount: 0,
    total: 0,
    isLoading: false,
    isLogin: false,
    data: []
}

export const getAllCandleafs = createAsyncThunk('card/getAllCarts', () => {
    const url = 'http://localhost:5000/api/v1/candleafs'
    return fetch(url).then((resp) => resp.json()).catch((err) => console.log(err))
})

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
                const newItem = state.data.filter(item => item._id == action.payload.id)
                newItem[0].amount = action.payload.amount;
                state.cartItems = [...state.cartItems, newItem[0]]
            }
        },  
        
        removeItem:(state, action) => {
            state.cartItems = state.cartItems.filter(item => item._id != action.payload)
        },
        
        decreaseItem:(state, action) => {
            const newItems = state.cartItems.map(item => {
                if(item._id == action.payload){
                    return {...item, amount: item.amount - 1}
                }
                return item;
            }).filter(item => item.amount > 0)
            state.cartItems = newItems
        },

        increaseItem:(state, action) => {
            const newItems = state.cartItems.map(item => {
                if(item._id == action.payload){
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
        },

        checkIsLogin: (state) => {
            if(state.isLogin == true){
                state.isLogin = false;
            } else {    
                state.isLogin = true;
            }
            
        }
    },
    extraReducers:{
        [getAllCandleafs.pending]: (state) => {
            state.isLoading = true
        },
        [getAllCandleafs.fulfilled]: (state, action) => {
            state.data = action.payload.candleafs
            state.isLoading = false
        },
        [getAllCandleafs.rejected]: (state) => {
            state.isLoading = true
        }
    }
})

export const {removeItem, increaseItem, decreaseItem, getTotalAmount, addItem, checkIsLogin} = cartSlice.actions;
export default cartSlice.reducer