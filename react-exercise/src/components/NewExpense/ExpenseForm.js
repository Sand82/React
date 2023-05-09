import { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = ({ onSaveExpanseData }) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  //   const [userInput, setUserInput] = useState({
  //     title: "",
  //     amount: "",
  //     date: "",
  //   });

  const titleChangeHandler = (e) => {
    setTitle(e.target.value);
  };

  //   const titleChangeHandler = (e) => {
  //     setUserInput((oldState) => {
  //       return { ...oldState, title: e.target.value };
  //     });
  //   };

  const amountChangeHandler = (e) => {
    setAmount(e.target.value);
  };

  //   const amountChangeHandler = (e) => {
  //     setUserInput((oldState) => {
  //       return { ...userInput, amount: e.target.value };
  //     });
  //   };

  const dateChangeHandler = (e) => {
    setDate(e.target.value);
  };

  //   const dateChangeHandler = (e) => {
  //     setUserInput((oldState) => {
  //       return { ...userInput, date: e.target.value };
  //     });
  //   };

  const submitHandler = (e) => {
    e.preventDefault();

    const data = {
      title: title,
      amount: amount,
      date: new Date(date),
    };
    onSaveExpanseData(data);

    setTitle("");
    setAmount("");
    setDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={title} onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={amount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2023-05-09"
            max="2050-01-01"
            value={date}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
