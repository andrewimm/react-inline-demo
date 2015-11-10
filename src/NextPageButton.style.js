import { arrow }  from './Mixins';
import { blue }   from './Colors';

export const nextPageArrowStyle = {
  ...arrow({
    direction: 'right',
    color: blue,
    base: 12,
    height: 8,
  }),
  display: 'inline-block',
  marginLeft: 6,
};
