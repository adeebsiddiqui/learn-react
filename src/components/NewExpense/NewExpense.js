import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData, // ... is the standard JS 'spread operator', ref: https://www.w3schools.com/react/react_es6_spread.asp
      id: Math.random().toString()
    };
    props.onAddExpense(expenseData); //calls the 'addExpenseHandler()' in parent component App:27 with 'expenseData'
  };

  return (
    <div className='new-expense'>
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} /> {/* 'onSaveExpenseData' is just a random name here */}
      {/* This sets up Child-to-Parent componenet communication through 'event props' i.e. props that has functions as its value, see ExpenseForm:57 */}
    </div>
  );
};

export default NewExpense;
