import React, { ButtonHTMLAttributes } from 'react';
import styled, { css } from 'styled-components';

interface ButtonProps extends ButtonHTMLAttributes<unknown> {
  buttonType?: 'primary' | 'secondary';
}

const colors = {
  primary: {
    background: '#26324c',
    border: '#ebc52d',
    hover: '#3B4D7B',
    text: '#ccc',
  },
  secondary: {
    background: '#eee',
    border: '#666',
    hover: '#ddd',
    text: '#333',
  },
};

const Element = styled.button<ButtonProps>`
  ${({ buttonType = 'primary' }) => css`
    border-radius: 10px;
    padding: 10px 20px;
    font-weight: 600;
    border: 1px solid ${colors[buttonType].border};
    background: ${colors[buttonType].background};
    color: ${colors[buttonType].text};
    transition: background 0.3s ease;
    box-shadow: 0px 6px 26px rgba(0, 0, 0, 0.25);
    cursor: pointer;
    text-align: center;
    font-size: 14px;
    line-height: 1.2;

    &:hover {
      background: ${colors[buttonType].hover};
    }
  `}
`;

const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
  return <Element {...props}>{children}</Element>;
};

export default Button;
