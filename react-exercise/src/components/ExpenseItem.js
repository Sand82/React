import "./ExpenseItem.css";

const ExpenseItem = ({ exspense }) => {
  return (
    <div className="expense-item">
      <div>{exspense.date.toISOString()}</div>
      <div className="expense-item__description">
        <h2>{exspense.title}</h2>
        <div className="expense-item__price">${exspense.amount}</div>
      </div>
    </div>
  );
};

export default ExpenseItem;
