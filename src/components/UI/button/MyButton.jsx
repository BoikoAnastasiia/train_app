import React from 'react';
import classes from './MyButton.module.scss';

const MyButton = ({ children, ...props }) => {
  return (
    <button type={props.type || 'button'} {...props} className={classes.myBtn}>
      {children}
    </button>
  );
};

export default MyButton;
