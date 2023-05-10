import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import { useState } from "react";
const NewExpense = ({ onAddExpense }) => {
  const [isEditing, setIsEditing] = useState(false);

  const onSaveExpanseData = (data) => {
    const expenseData = {
      ...data,
      id: Math.random().toString(),
    };
    onAddExpense(expenseData);
    setIsEditing(false);
  };

  const startEditingHadler = () => {
    setIsEditing(true);
  };

  const stopEditingHeandler = () => {
    setIsEditing(false);
  };

  return (
    <div className="new-expense">
      {!isEditing && (
        <button onClick={startEditingHadler}>Add New Expense</button>
      )}
      {isEditing && (
        <ExpenseForm
          onStopEditing={stopEditingHeandler}
          onSaveExpanseData={onSaveExpanseData}
        />
      )}
    </div>
  );
};

export default NewExpense;
