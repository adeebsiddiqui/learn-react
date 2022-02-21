import React from 'react'; //Implicitly imported in latest React libraries, explicit import not needed
import ReactDOM from 'react-dom'; // importing ReactDOM objct from react-dom library

import './index.css';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));
//App is a component. A React component is nothing but a function that returns some JSX code