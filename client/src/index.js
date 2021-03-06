import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import "./assets/styles/index.css";
import reportWebVitals from './reportWebVitals';

// imports for the Redux store
import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";

// imports for Redux Persist
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";

// import reducers
import allReducers from "./reducers";

// compose enhancer for Redux store
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


// Create the Redux store
const store = createStore(allReducers, composeEnhancer(applyMiddleware(thunk)));
// Persistor to persist the Redux store
const persistor = persistStore(store);


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
