import React from 'react';
import ReactDOM from 'react-dom';
//import { App } from './App';
import { userProfile } from './userProfile';


it('renders without crashing', () => {
  const div = document.createElement('div');
  const props = {
    name: AtchayaArivalagan,
    gitHubUserName: aarivalagan
  };
  ReactDOM.render(<userProfile {...props} />, div);
  ReactDOM.unmountComponentAtNode(div);
});

