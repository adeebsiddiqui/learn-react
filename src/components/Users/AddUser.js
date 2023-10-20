import React, { useState, Fragment, useRef } from 'react'; //To use Refs we have to import the 'useRef' hook

import Card from '../UI/Card';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';
import classes from './AddUser.module.css';

const AddUser = (props) => {
  const nameInputRef = useRef();  //Refs allow us to get access to other DOM elements, here nameInputRef has access to 'input' element at line 53
  const ageInputRef = useRef(); //ageInputRef has access to 'input' element at line 55

  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();

    const enteredName = nameInputRef.current.value; //holds the current value of 'input' element at line 53
    const enteredUserAge = ageInputRef.current.value; //holds the current value of 'input' element at line 55
    
    if (enteredName.trim().length === 0 || enteredUserAge.trim().length === 0) {
      setError({
        title: 'Invalid input',
        message: 'Please enter a valid name and age (non-empty values).',
      });
      return;
    }

    if (+enteredUserAge < 1) {
      setError({
        title: 'Invalid age',
        message: 'Please enter a valid age (> 0).',
      });
      return;
    }

    props.onAddUser(enteredName, enteredUserAge);
    nameInputRef.current.value = ''; //Refs shouldn't be used to manipulate the DOM e.g. add a new element or change a CSS class
    ageInputRef.current.value = '';  // These two Refs are just changing the value of 'input' element, not manipulating the DOM hence its okay
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <Fragment>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input id="username" type="text" ref={nameInputRef} /> {/* 'ref' is a built in React prop that can be added to any HTML element */}
          <label htmlFor="age">Age (Years)</label>
          <input id="age" type="number" ref={ageInputRef} />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Fragment>
  );
};

export default AddUser;
