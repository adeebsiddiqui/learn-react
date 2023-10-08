import ExpenseForm from './ExpenseForm';
import { useState } from 'react';
import './NewExpense.css';

const NewExpense = (props) => {
  const [displayForm, setDisplayForm] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };
    props.onAddExpense(expenseData);
    setDisplayForm(false);
  };

  const showFormHandler = () => setDisplayForm(true);
  const hideFormHandler = () => setDisplayForm(false);

  return (
    <div className='new-expense'>
      {!displayForm && <button onClick={showFormHandler}>Add New Expense</button>}
      {displayForm && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onHideForm={hideFormHandler} />}
      {/* In JS, If any value or HTML element is used as an expression after the '&&' operator then that value/HTML expression is returned if the condition before '&&' operator is TRUE*/}
    </div>
  );
};

export default NewExpense;
