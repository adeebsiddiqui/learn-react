import React from 'react';

import styles from './Button.module.css'; //example of CSS Module. The object name 'styles' here is arbitrary.
// More about CSS module - https://create-react-app.dev/docs/adding-a-css-modules-stylesheet/

const Button = props => {
  return (
    <button type={props.type} className={styles.button} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
