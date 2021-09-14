import "./ExpenseForm.css";
import { useState } from "react";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  //Enhanced useState - instead of calling useState 3 times - call it once. OBJECT style
  //--> initally triggered with empty string
  // const [userInput, setUserInput] = useState({
  //     enteredTitle: "",
  //     enteredAmont: "",
  //     enteredDate: ""
  // })

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
    // setUserInput({
    //     ...setUserInput,
    //     enteredTitle: event.target.value
    // })
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
        title: enteredTitle,
        amount: enteredAmount,
        date: new Date(enteredDate)
    }
    props.onSaveExpenseData(expenseData);
    setEnteredAmount("");
    setEnteredDate("");
    setEnteredTitle("")
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={enteredTitle} onChange={titleChangeHandler}></input>
        </div>
        <div className="new-expense__control" onChange={amountChangeHandler}>
          <label>Amount</label>
          <input type="number" value={enteredAmount} min="0.01" step="0.01"></input>
        </div>
        <div className="new-expense__control" onChange={dateChangeHandler}>
          <label>Date</label>
          <input type="date" value={enteredDate} min="2019-01-01" max="2022-12-31" />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type='button' onClick={props.onCancel}> Cancel </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
