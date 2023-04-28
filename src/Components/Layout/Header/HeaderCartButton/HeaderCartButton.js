import { useEffect } from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import CartContext from '../../../../Store/CartContext';
import HeaderCartIcon from '../HeaderCartIcon/HeaderCartIcon'
import styles from './HeaderCartButton.module.css'
const HeaderCartButton = (props) => {
    const cartCtx =useContext(CartContext)
    const {items} = cartCtx;
    const numberOfItems = items.reduce((currentNumber, item)=>{
        return(
            currentNumber + item.amount
        )
    },0)
    const [isEmpty, setIsEmpty] = useState(false)
    const alert = `${styles.button} ${isEmpty ? styles.bump : ''}`
    useEffect(()=>{
        if(items.length === 0){
            return
        }
        setIsEmpty(true)
        const timer = setTimeout(()=>{
            setIsEmpty(false)
        },300)
        return () => {
            clearTimeout(timer)
        }
    },[items])
    return (  
        <button className={alert} onClick={props.onClick}>
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