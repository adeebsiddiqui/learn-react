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
      {/* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_AND */}
    </div>
  );
};

export default NewExpense;
