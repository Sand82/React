import { useState } from "react";

import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import ExpenseFilter from "./ExpenseFilter";

const Expenses = ({ expenses }) => {
  const [filterData, setFilterDate] = useState("2023");

  const onFilterChange = (data) => {
    setFilterDate(data);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          filterData={filterData}
          onFilterChange={onFilterChange}
        />
        <ExpenseItem expense={expenses[0]} />
        <ExpenseItem expense={expenses[1]} />
        <ExpenseItem expense={expenses[2]} />
        <ExpenseItem expense={expenses[3]} />
      </Card>
    </div>
  );
};

export default Expenses;
