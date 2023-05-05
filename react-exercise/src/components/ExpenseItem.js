import "./ExpenseItem.css";

import ExspenseDate from "./ExspanseDate";

const ExpenseItem = ({ exspense }) => {
  return (
    <div className="expense-item">
      <ExspenseDate date={exspense.date} />
      <div className="expense-item__description">
        <h2>{exspense.title}</h2>
        <div className="expense-item__price">${exspense.amount}</div>
      </div>
    </div>
  );
};

export default ExpenseItem;
