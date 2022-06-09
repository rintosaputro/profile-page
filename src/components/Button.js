import React from 'react';

const Button = ({
  color, isSubmit, event, rounded, children,
}) => (
  <button
    className={`btn text-white ${rounded && 'rounded-pill shadow'} ${color === 'secondary' ? 'btn-secondary' : 'btn-primary'}`}
    onClick={event}
    type={isSubmit ? 'submit' : 'button'}
    style={{ width: '210px', height: `${rounded ? '55px' : '50px'}` }}
  >
    {children}
  </button>
);

export default Button;
