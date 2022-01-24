import React from "react";
import Expense from "./components/Expenses/Expense";
import NewExpense from "./components/NewExpenses/NewExpense";
const App=()=> {
  return (
    <div>
      <NewExpense></NewExpense>
      <Expense></Expense>
    </div>
  );
}

export default App;
