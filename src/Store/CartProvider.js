import CartContext from "./CartContext";
import { useReducer } from "react";

const defaultCartItems = {
    items: [],
    totalAmount: 0
}

const cartReducer = (state,action)=>{
    if(action.type === 'ADD'){}
    if(action.type === 'REMOVE'){}
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