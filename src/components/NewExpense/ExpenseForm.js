import { useState } from 'react';

import './ExpenseForm.css';

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');

  const titleChangeHandler = (event) => { //'event' is a default JS object provided by the browser whenever we listen to events on HTML elements
    setEnteredTitle(event.target.value);
  };

  const amountChangeHandler = event => {
    setEnteredAmount(event.target.value);
  };

  const dateChangeHandler = event => {
    setEnteredDate(event.target.value);
  };

  const submitHandler = (event) => { // 'submit event' emitted by form
    event.preventDefault(); //Default browser behavior: whenever a form is submitted, browser sends a request to the server and reloads the page
    // The above vanilla JS statement prevents that default browser behavior

    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount, //bug fix? lecture: Fixing a small bug
      date: new Date(enteredDate),
    };

    props.onSaveExpenseData(expenseData);
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
  };

  return (
    <form onSubmit={submitHandler}> {/*Default browser behavior: if a submit button is pressed inside of a form then the form itself will emit a 'submit event' which we can listen*/}
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input
            type='text'
            value={enteredTitle} //2-Way binding
            onChange={titleChangeHandler}
          />
        </div>
        <div className='new-expense__control'>
          <label>Amount</label>
          <input
            type='number'
            min='0.01'
            step='0.01'
            value={enteredAmount} //2-Way binding
            onChange={amountChangeHandler}
          />
        </div>
        <div className='new-expense__control'>
          <label>Date</label>
          <input
            type='date'
            min='2019-01-01'
            max='2022-12-31'
            value={enteredDate} //2-Way binding
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className='new-expense__actions'>
        <button type='submit'>Add Expense</button>
        <button type='button' onClick={props.onHideForm}>Cancel</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
