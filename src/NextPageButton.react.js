import { Button }             from './Button.react';
import { nextPageArrowStyle } from './NextPageButton.style';
import React                  from 'react';

export const NextPageButton = ({ onClick }) => (
  <Button onClick={onClick}>
    <span>Next page</span>
    <span style={nextPageArrowStyle} />
  </Button>
);
