import { useState } from "react";

import Card from "../UI/Card";
import "./Expenses.css";
import ExpenseFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

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
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList expenses={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;
