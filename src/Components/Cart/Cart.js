import { useContext } from 'react';
import CartContext from '../../Store/CartContext';
import Modal from '../UI/Modal/Modal';
import styles from './Cart.module.css'
import CartItem from './CartItem/CartItem'
const Cart = (props) => {
    const cartCtx = useContext(CartContext);
    const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`
    const hasItems = cartCtx.items.length > 0
    const removeItemFromCart = (id) => {
        cartCtx.removeItem(id)
    }
    const addItemToCart = (item) => {
        cartCtx.addItem({...item, amount:1})
    }
    const cartItems = (
        <ul className={styles['cart-items']}>
            {cartCtx.items.map(item=>{
            return(
                <CartItem 
                    key={item.id} 
                    name={item.name} 
                    amount={item.amount} 
                    price={item.price} 
                    onRemove={removeItemFromCart.bind(null, item.id)} 
                    onAdd={addItemToCart.bind(null,item)}
                />
            )
        })}
        </ul>
    );
    return ( 
        <Modal onClick={props.onHideCart}>
            {cartItems}
            <div className={styles.total}>
                <span>Total Amount</span>
                <span>{totalAmount}</span>
            </div>
            <div className={styles.actions}>
                <button className={styles['button-alt']} onClick={props.onHideCart}>Close</button>
                {hasItems&&<button className={styles.button}>Order</button>}
            </div>
            <div></div>
        </Modal>
     );
}
 
export default Cart;