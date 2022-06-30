import { BrowserRouter as Router } from 'react-router-dom';
import React from 'react';
import App from '../containers/App';
import { Provider } from 'react-redux';
import store from "../redux/store"
export default () => {
  return (
    <Provider store={store}>
    <Router>
      <App/>
    </Router>
    </Provider>

  );
};
