import { useState } from "react";

import Card from "../UI/Card";
import "./Expenses.css";
import ExpenseFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList";

const Expenses = ({ expenses }) => {
  const [filterData, setFilterDate] = useState("2020");

  const onFilterChange = (data) => {
    setFilterDate(data);
  };

  const filteredExpenses = expenses.filter((el) => {
    return el.date.getFullYear().toString() === filterData;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          filterData={filterData}
          onFilterChange={onFilterChange}
        />
        <ExpensesList expenses={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;
