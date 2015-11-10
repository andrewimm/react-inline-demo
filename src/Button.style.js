import * as Colors from './Colors.js';

export const buttonStyle = {
  display: 'inline-block',
  height: 30,
  minWidth: 110,
  paddingLeft: 16,
  paddingRight: 16,

  borderWidth: 1,
  borderStyle: 'solid',
  borderColor: Colors.blue,
  borderRadius: 5,
  outline: 0,

  color: Colors.blue,
  fontSize: 14,
  fontFamily: 'Helvetica',
  lineHeight: '30px',
  textAlign: 'center',

  cursor: 'pointer',
};

export const primaryButtonStyle = {
  ...buttonStyle,
  background: Colors.blue,
  color: 'white'
};
