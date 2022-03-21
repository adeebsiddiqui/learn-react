import React from 'react';

import styles from './Button.module.css'; //the object name 'styles' here is arbitrary

const Button = props => {
  return (
    <button type={props.type} className={styles.button} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
