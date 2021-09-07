import "./ExpenseForm.css";
import {useState} from 'react';

const ExpenseForm = () => {

  
    // const [enteredTitle, setEnteredTitle] = useState('');
    // const [amountChange, setamountChange] = useState('');
    // const [dateChange, setdateChange] = useState('');

    //Enhanced useState - instead of calling useState 3 times - call it once. OBJECT style
    //--> initally triggered with empty string 
    const [userInput, setUserInput] = useState({
        enteredTitle: "",
        enteredAmont: "",
        enteredDate: ""
    })

    const titleChangeHandler = (event) => {
        // setEnteredTitle(event.target.value);
        setUserInput({
            ...setUserInput,
            enteredTitle: event.target.value
        })
    }

    const amountChangeHandler = (event) =>{
        // setamountChange(event.target.value)
    }
    
    const dateChangeHandler = (event) =>{
        // setdateChange(event.target.value)
    }

    return (
        <form>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type="text" onChange= {titleChangeHandler} ></input>
                </div>
                <div className='new-expense__control' onChange={amountChangeHandler}>
                    <label>Amount</label>
                    <input type="number" min="0.01" step="0.01"></input>
                </div>
                <div className='new-expense__control' onChange={dateChangeHandler}>
                    <label>Date</label>
                    <input type='date' min='2019-01-01' max='2022-12-31' />
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type="submit">Add Expense</button>
            </div>
        </form>
    );
};

export default ExpenseForm;
