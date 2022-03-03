import { useState } from 'react'; //import with {} are named imports which means only import specific function from library
// 'useState' hook is used for managing state of React components

import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title); //React registers the 'props.title' initial value into its state variable 'title' and manages it for a ExpenseItem component instance
  //Array destructuring - feature of modern JS

  console.log('ExpenseItem evaluated'); //watch the number of times this is logged when page is loaded first and after each click event

  const clickHandler = () => { //good practice to end event handler function names with 'Handler' after event name
    setTitle('Updated!'); //when called, sets the value 'Updated!' to the state variable 'title' and re-executes the ExpenseItem component function
    console.log(title); // old value still being logged
    // call to state update function above doesn't change the value right away but instead schedules it, so in this line the new value is not available yet
  }

  return (
    <Card className='expense-item'> {/*applies the Card.css from Card component along with ExpenseItem.css */}
      <ExpenseDate date={props.date} /> {/*date attribute is passed as 'props' in ExpenseDate component*/}
      <div className='expense-item__description'>
        <h2>{title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button> {/*Event name (e.g. click) should start with uppercase character after 'on'*/}
      {/*onClick EventListener should just point to handler function 'clickHandler' without any '()', even if it was written with the 'function' keyword.
      If written as 'clickHandler()', JS will execute the function when line 19 is parsed while returning the evaluated JSX code, not when click occurs*/}
    </Card>
  );
}

export default ExpenseItem;
