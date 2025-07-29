import React from 'react';
import { Button as BootstrapButton } from 'react-bootstrap';
import './Button.css';

const Button = ({ 
  children, 
  variant = 'primary', 
  onClick, 
  type = 'button',
  className = '',
  disabled = false 
}) => {
  const buttonClass = `btn-custom btn-${variant}-custom ${className}`;
  
  return (
    <BootstrapButton 
      className={buttonClass}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {children}
    </BootstrapButton>
  );
};

export default Button; 