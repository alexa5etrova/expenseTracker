import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import { useState } from "react";

const EXPENSES_DATA = [
  {
    id: "el1",
    title: "Toilet Paper",
    amount: 98.1,
    date: new Date(2020, 7, 14),
  },
  { id: "el2", title: "Shampoo", amount: 12, date: new Date(2020, 4, 15) },
  {
    id: "el3",
    title: "Touth paste",
    amount: 10.5,
    date: new Date(2020, 8, 19),
  },
  {
    id: "e14",
    title: "Packing",
    amount: 1.5,
    date: new Date(2021, 8, 19),
  },
];

function App() {
  const [expenses, setExpenses] = useState(EXPENSES_DATA);

  const expenseSavingHandler = (expenseData) => {
    setExpenses((prevExpences) => {
      return [expenseData, ...prevExpences];
    });
  };

  return (
    <div>
      <NewExpense onExpenseSaving={expenseSavingHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
