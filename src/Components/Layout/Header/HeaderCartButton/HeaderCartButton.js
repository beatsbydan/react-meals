import { useContext } from 'react';
import CartContext from '../../../../Store/CartContext';
import HeaderCartIcon from '../HeaderCartIcon/HeaderCartIcon'
import styles from './HeaderCartButton.module.css'
const HeaderCartButton = (props) => {
    const cartCtx =useContext(CartContext)
    const numberOfItems = cartCtx.items.reduce((currentNumber, item)=>{
        return(
            currentNumber + item.amount
        )
    },0)
    return (  
        <button className={styles.button} onClick={props.onClick}>
            <span className={styles.icon}>
                <HeaderCartIcon/>
            </span>
            <span>Your Cart</span>
            <span className={styles.badge}>
                {numberOfItems}
            </span>
        </button>
    );
}
 
export default HeaderCartButton;