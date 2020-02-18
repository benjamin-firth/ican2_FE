import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers';
import './index.scss';
import App from './components/App/App';
import { BrowserRouter } from 'react-router-dom';

const store = createStore(rootReducer, composeWithDevTools());

const router = (
  <Provider store={store} >
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
)

ReactDOM.render(router, document.getElementById('root'));