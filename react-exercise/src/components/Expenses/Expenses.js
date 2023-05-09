import { useState } from "react";

import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import ExpenseFilter from "./ExpenseFilter";

const Expenses = ({ expenses }) => {
  const [filterData, setFilterDate] = useState("2023");

  const onFilterChange = (data) => {
    setFilterDate(data);

    console.log(data);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          filterData={filterData}
          onFilterChange={onFilterChange}
        />
        {expenses.map((el) => (
          <ExpenseItem key={el.id} expense={el} />
        ))}
      </Card>
    </div>
  );
};

export default Expenses;
