import CartContext from "./CartContext";
import { useReducer } from "react";

const defaultCartItems = {
    items: [],
    totalAmount: 0
}

const cartReducer = (state,action)=>{
    if(action.type === 'ADD'){
        const updatedTotalAmount = state.totalAmount + (action.item.price * action.item.amount) 
        const existingItemIndex = state.items.findIndex(item=> item.id === action.item.id)
        const existingItem = state.items[existingItemIndex]
        let updatedCartItems;
        if(existingItem){
            const updatedItem = {...existingItem, amount: existingItem.amount + action.item.amount}
            updatedCartItems = [...state.items]
            updatedCartItems[existingItemIndex] = updatedItem;
        }
        else{
            updatedCartItems = state.items.concat(action.item)
        }
        return {
            items: updatedCartItems,
            totalAmount: updatedTotalAmount
        }
    }
    if(action.type === 'REMOVE'){
        const existingItemIndex = state.items.findIndex(item => item.id === action.id)
        const existingItem = state.items[existingItemIndex]
        const updatedTotalAmount = state.totalAmount - existingItem.price
        let updatedItems;
        if(existingItem.amount === 1){
            updatedItems = state.items.filter(item => item.id !== action.id)
        }
        else{
            const updatedItem = {...existingItem, amount: existingItem.amount - 1}
            updatedItems = [...state.items]
            updatedItems[existingItemIndex] = updatedItem
        }
        return{
            items: updatedItems,
            totalAmount: updatedTotalAmount
        }
    }
    return defaultCartItems;
} 

const CartProvider = (props) => {
    const [cartState, dispatchCartAction] =useReducer(cartReducer,defaultCartItems)
    const addToCart = (item) => {
        dispatchCartAction({type: 'ADD',item:item})
    } 
    const removeFromCart = (id) => {
        dispatchCartAction({type:'REMOVE', id:id})
    } 
    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem:addToCart,
        removeItem:removeFromCart
    }
    return ( 
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
     );
}
 
export default CartProvider;