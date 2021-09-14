import React, { useState } from "react";
import "./AddNewButton.css";

const AddNewButton = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const showAddExpense = (event) => {
    console.log("heelelo baazzz");
    setIsEditing(true);
  };

  return (
    <div className="addNewButton">
      {!isEditing && <button onClick={showAddExpense}>Add new Expense</button>}
    </div>
  );
};

export default AddNewButton;
