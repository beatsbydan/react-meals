import { useState } from 'react';
import { useRef } from 'react';
import Input from '../../../UI/Input/Input';
import styles from './MealItemForm.module.css'
const MealItemForm = (props) => {
    const amountInputRef = useRef()
    const [amountIsValid, setAmountIsValid] = useState(true)
    const handleSubmit = (e) => {
        e.preventDefault()
        const enteredAmount = amountInputRef.current.value
        const actualAmount = +enteredAmount
        if(enteredAmount.trim().length === 0 || actualAmount < 1 || actualAmount > 5){
            setAmountIsValid(false)
            return
        }
        props.onAddToCart(actualAmount)
    }
    return (  
        <form action="" className={styles.form} onSubmit={handleSubmit}>
            <Input 
                ref={amountInputRef}
                label="Amount" 
                input={{
                    id: 'amount_' + props.id,
                    type:'number',
                    min: '1',
                    max:'5',
                    step:'1',
                    defaultValue: '1'
                }}
            />
            <button type='submit'>+ Add</button>
            {!amountIsValid && <p>Please enter a valid amount (1-5).</p>}
        </form>
    );
}
 
export default MealItemForm;