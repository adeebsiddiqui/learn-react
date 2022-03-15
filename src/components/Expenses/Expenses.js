import { useState } from 'react';

import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';

import './Expenses.css';

const Expenses = (props) => {

  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter(expense => expense.date.getFullYear().toString() === filteredYear);

  return (
    <div>
      <Card className='expenses'> {/*applies the Card.css from Card component along with Expenses.css */}
        <ExpensesFilter selected={filteredYear} onFilterChange={filterChangeHandler} />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
    /* 'key' is a special React prop that should be added to a component or HTML element which is used to display elements of a list by looping through it.
    It is used by React to uniquely identify each element of the list, not using 'key' props may lead to bug and performance issues.
    Not a must but for more info Lecture:66 */
  );
}

export default Expenses;
