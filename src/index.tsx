import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware } from 'redux';

import App from '@/containers/app';
import reducer from '@/reducers';
import { initialState } from '@/declare';
import appSaga from '@/sagas/app';

const sagaMiddreware = createSagaMiddleware();
const store = createStore(
  reducer,
  initialState,
  applyMiddleware(sagaMiddreware)
);
sagaMiddreware.run(appSaga);

export default store;

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);
