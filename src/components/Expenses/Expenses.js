import React, { useState } from "react";

import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "../ExpenseFilter/ExpensesFilter";
import ExpensesList from "./ExpensesList";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const newYearHandler = (selectedYear) => {
    console.log("inside the Expenses", selectedYear);
    setFilteredYear(selectedYear);
  };

  const newfilteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={filteredYear} onNewYear={newYearHandler} />
        <ExpensesList items={newfilteredExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;
