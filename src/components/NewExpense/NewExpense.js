import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
import { useState } from "react";

const NewExpense = (props) => {
  const [isFormOpened, setIsFormOpened] = useState(false);

  const saveSubmitDataHandler = (enteredData) => {
    const expenseDataForm = {
      ...enteredData,
      id: Math.floor(Math.random() * 100).toString(),
    };
    props.onExpenseSaving(expenseDataForm);
    console.log(expenseDataForm);
  };

  const formOpeningHandler = () => {
    setIsFormOpened(!isFormOpened);
  };

  return (
    <div className="new-expense">
      {!isFormOpened && (
        <button onClick={formOpeningHandler}>Add New Expense</button>
      )}
      {isFormOpened && (
        <ExpenseForm
          formOpeningHandler={formOpeningHandler}
          onSaveSubmitData={saveSubmitDataHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
