import React from "react";
import ExpenseList from "./ExpenseList";
import ExpenseListFilters from "./ExpenseListFilters";

const Expensify = () => (
  <div>
    <ExpenseListFilters></ExpenseListFilters>
    <ExpenseList></ExpenseList>
  </div>
);

export default Expensify;
