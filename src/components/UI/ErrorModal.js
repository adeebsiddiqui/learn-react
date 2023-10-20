import React from 'react';
import ReactDOM from 'react-dom';

import Card from './Card';
import Button from './Button';
import classes from './ErrorModal.module.css';

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onConfirm} />;
};

const ModalOverlay = (props) => {
  return (
    <Card className={classes.modal}>
      <header className={classes.header}>
        <h2>{props.title}</h2>
      </header>
      <div className={classes.content}>
        <p>{props.message}</p>
      </div>
      <footer className={classes.actions}>
        <Button onClick={props.onConfirm}>Okay</Button>
      </footer>
    </Card>
  );
};

const ErrorModal = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal( //React Portals let you render some children HTLM element into a different part of the DOM.
        <Backdrop onConfirm={props.onConfirm} />, //'Backdrop' is the componenet which needs to be rendered somewhere else
        document.getElementById('backdrop-root') //HTML element ID where 'Backdrop' component will be rendered i.e. in App.js
      )}
      {ReactDOM.createPortal(
        <ModalOverlay //'ModalOverlay' is the componenet which needs to be rendered somewhere else
          title={props.title}
          message={props.message}
          onConfirm={props.onConfirm}
        />,
        document.getElementById('overlay-root') //HTML element ID where 'ModalOverlay' children compnent will be rendered i.e. in App.js
      )}
    </React.Fragment>
  );
};

export default ErrorModal;
