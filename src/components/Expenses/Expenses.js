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

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={filteredYear} onNewYear={newYearHandler} />
        {props.items.map((x) => (
          <ExpenseItem title={x.title} amount={x.amount} date={x.date} />
        ))}
      </Card>
    </div>
  );
};

export default Expenses;
