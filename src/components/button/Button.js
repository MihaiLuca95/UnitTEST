import React from 'react';
import './Button.css';

const Button = ({label}) => {
    return <div data-testid="button" className="btn-style">{label}</div>
}

export default Button;
