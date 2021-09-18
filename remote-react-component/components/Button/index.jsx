import React from 'react';

import './index.module.scss';

// console.log('styles', styles)

const Button = (props) => {
  const { handleClick, text } = props;
  return <button className="btn" onClick={handleClick}>{text}</button>
}

export default Button;