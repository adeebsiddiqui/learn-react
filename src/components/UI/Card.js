import React from 'react';

import './Card.css';

const Card = (props) => {
  const classes = 'card ' + props.className; //applies the Card.css along with the css className prop in another Component where Card component is imported

  return <div className={classes}>{props.children}</div>;
  // 'children' is a reserved keyword, the value of which is the content between the openening and closing tags of Card component wherever its used
  // We need to use 'props.children' because unlike HTML tags, Custom components can't wrap other contents by default
};

export default Card;
