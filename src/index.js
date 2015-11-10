import { Button } from './Button.react';
import { NextPageButton } from './NextPageButton.react';
import React      from 'react';
import ReactDOM   from 'react-dom';

const Index = () => (
  <div>
    <div>
      <Button primary={true}>Primary action</Button>
    </div>
    <div>
      <Button>Secondary action</Button>
    </div>
    <div>
      <NextPageButton />
    </div>
  </div>
);

ReactDOM.render(<Index />, document.getElementById('mount'));
