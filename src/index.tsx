import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import App from '@/container/app';
import appSaga from '@/saga/app';

import reducer from '@/reducer';
import { initialState } from '@/declare';
import createSagaMiddleware from 'redux-saga';

const sagaMiddreware = createSagaMiddleware();
const store = createStore(
  reducer,
  initialState,
  applyMiddleware(sagaMiddreware)
);
sagaMiddreware.run(appSaga);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);
