import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';
import { useState } from 'react';

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  }
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = expense => {
    //setExpenses([expense, ...prevExpenses]); //improper way
    setExpenses(prevExpenses => [expense, ...prevExpenses]); // ... is the standard JS 'spread operator', ref: https://www.w3schools.com/react/react_es6_spread.asp
    /* Use function inside state-update function (i.e. setExpenses) when state update depends on its previous state.
    'prevExpenses' in that inner function which automatically holds the previous state snapshot. Lecture: Updating state that depends on the previous state */
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
