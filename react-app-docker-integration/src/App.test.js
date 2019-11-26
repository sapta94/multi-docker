import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('prints component name on screen', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  console.log('APP')
  ReactDOM.unmountComponentAtNode(div);
  
});
