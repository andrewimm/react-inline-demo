import { buttonStyle, primaryButtonStyle } from './Button.style';
import React from 'react';

export const Button = ({ children, onClick, primary }) => {
  let style = buttonStyle;
  if (primary) {
    style = primaryButtonStyle;
  }
  return <a style={style}>{children}</a>;
};
