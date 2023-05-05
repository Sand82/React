import "./ExpenseItem.css";

import ExpenseDate from "./ExpanseDate";

const ExpenseItem = ({ exspense }) => {
  return (
    <div className="expense-item">
      <ExpenseDate date={exspense.date} />
      <div className="expense-item__description">
        <h2>{exspense.title}</h2>
        <div className="expense-item__price">${exspense.amount}</div>
      </div>
    </div>
  );
};

export default ExpenseItem;
