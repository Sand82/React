import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem";

const ExpensesList = ({ expenses }) => {
  if (expenses.length === 0) {
    return <h2 className="expenses-list__fallback">Found no expenses.</h2>;
  }

  return (
    <ul className="expenses-list">
      {expenses.map((el) => (
        <ExpenseItem key={el.id} expense={el} />
      ))}
    </ul>
  );
};

export default ExpensesList;
