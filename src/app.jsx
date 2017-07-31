import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';

import createReducer from './setup/reducer';
import configureStore from './setup/store';

const reducer = createReducer();
const store = configureStore(reducer);

const appContainer = document.getElementById('app');

function render() {
  ReactDOM.render((
    <AppContainer>
      <Provider store={store}>

      </Provider>
    </AppContainer>
  ), appContainer);
}