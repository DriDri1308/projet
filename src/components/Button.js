import React from 'react';
import './Card.css';

const Button = ({ onClick, label, type, style }) => {
  return (
    <button type={type} className="button" onClick={onClick} style={style}>
      {label}
    </button>
  );
};

export default Button;
