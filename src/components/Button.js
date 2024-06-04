import React from 'react';

const Button = ({ onClick, label, className }) => {
  return (
    <button className={`button ${className}`} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
