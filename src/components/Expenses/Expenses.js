import React from 'react';

import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card'; //import without extension means its .js file import
import './Expenses.css';

const Expenses = (props) => {
  return (
    <Card className="expenses"> {/*applies the Card.css from Card component along with Expenses.css */}
      <ExpenseItem
        title={props.items[0].title} //title, amount and date attributes are passed as 'props' in ExpenseItem component
        amount={props.items[0].amount}
        date={props.items[0].date}
      />
      <ExpenseItem
        title={props.items[1].title}
        amount={props.items[1].amount}
        date={props.items[1].date}
      />
      <ExpenseItem
        title={props.items[2].title}
        amount={props.items[2].amount}
        date={props.items[2].date}
      />
      <ExpenseItem
        title={props.items[3].title}
        amount={props.items[3].amount}
        date={props.items[3].date}
      />
    </Card>
  );
}

export default Expenses;
