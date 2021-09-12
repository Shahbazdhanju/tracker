import React, { useState } from "react";

import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "../ExpenseFilter/ExpensesFilter";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const newYearHandler = (selectedYear) => {
    console.log("inside the Expenses", selectedYear);
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  console.log("full year", props.items[0].date.getFullYear());
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={filteredYear} onNewYear={newYearHandler} />
        {filteredExpenses.length === 0 ? (
          <p>No expense found.</p>
        ) : (
          filteredExpenses.map((expense) => (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          ))
        )}
      </Card>
    </div>
  );
};

export default Expenses;
