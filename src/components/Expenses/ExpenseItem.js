import React from 'react';

import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

const ExpenseItem = (props) => {
  return (
    <Card className='expense-item'> {/*applies the Card.css from Card component along with ExpenseItem.css */}
      <ExpenseDate date={props.date} /> {/*date attribute is passed as 'props' in ExpenseDate component*/}
      <div className='expense-item__description'>
        <h2>{props.title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
      </div>
    </Card>
  );
}

// Instead of props we can also use JS object destructuring to pass properties
// const ExpenseItem = ({title, amount, date}) => {
//   return (
//     <Card className='expense-item'> {/*applies the Card.css from Card component along with ExpenseItem.css */}
//       <ExpenseDate date={date} /> {/*date attribute is passed as 'props' in ExpenseDate component*/}
//       <div className='expense-item__description'>
//         <h2>{title}</h2>
//         <div className='expense-item__price'>${amount}</div>
//       </div>
//     </Card>
//   );
// }

export default ExpenseItem;
