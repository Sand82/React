import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
const NewExpense = ({ onAddExpense }) => {
  const onSaveExpanseData = (data) => {
    const expenseData = {
      ...data,
      id: Math.random().toString(),
    };
    onAddExpense(expenseData);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpanseData={onSaveExpanseData} />
    </div>
  );
};

export default NewExpense;
