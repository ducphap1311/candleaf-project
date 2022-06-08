// import React, {useState, useContext, useReducer, useEffect} from 'react'
// import data from './data/ProductsData'

// const AppContext = React.createContext();

// const initialState = {
//     cartItems: [],
//     amount: 0,
//     total: 0,
//     loading: false
// }

// const reducer = (state, action) => {
//     if(action.type == 'ADD'){   
//         let flag = false;  
//         const items = state.cartItems.map(item => {
//             if(item.id == action.payload){
//                 flag = true;
//                 return {...item, amount: item.amount + action.amount}
//             }
//             return item;
//         })
//         if(flag){
//             return {...state, cartItems: items}
//         } else {
//             const newItem = data.filter(item => item.id == action.payload)
//             newItem[0].amount = action.amount;
//             return {...state, cartItems: [...state.cartItems, newItem[0]]}
//         }  
//     }

//     if(action.type == "INCREASE"){
//         const newItems = state.cartItems.map(item => {
//             if(item.id == action.payload){
//                 return {...item, amount: item.amount + 1}
//             }
//             return item;
//         })
//         return {...state, cartItems: newItems}
//     }

//     if(action.type == "DECREASE"){
//         const newItems = state.cartItems.map(item => {
//             if(item.id == action.payload){
//                 return {...item, amount: item.amount - 1}
//             }
//             return item;
//         }).filter(item => item.amount > 0)
//         return {...state, cartItems: newItems}
//     }

//     if(action.type == "REMOVE"){
//         const newItems = state.cartItems.filter(item => item.id != action.payload)
//         return {...state, cartItems: newItems}
//     }

//     if(action.type === "GET_TOTAL"){
//         let {amount, total} = state.cartItems.reduce((a, c) => {
//             a.amount += c.amount;
//             a.total += c.amount * c.price;
//             return a
//         },{amount: 0, total: 0})

//         return {...state, amount, total}
//     }
// }

// const AppProvider = ({children}) => {
//     const [state, dispatch] = useReducer(reducer, initialState);

//     const add = (id, amount) => {
//         dispatch({type: "ADD", payload: id, amount: amount})
//     }

//     const increase = (id) => {
//         dispatch({type: "INCREASE", payload: id})
//     }

//     const decrease = (id) => {
//         dispatch({type: "DECREASE", payload: id})
//     }

//     const removeItem = (id) => {
//         dispatch({type: "REMOVE", payload: id})
//     }

//     useEffect(() => {
//         dispatch({type: "GET_TOTAL"})
//     }, [state.cartItems])

//     return <AppContext.Provider value={{...state, add, increase, decrease, removeItem}}>
//         {children}
//     </AppContext.Provider>
// }

// export const useGlobalContext = () => {
//     return useContext(AppContext)
// }

// export {AppContext, AppProvider}
