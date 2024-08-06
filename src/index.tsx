import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from "react-redux";
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import {rootReducer} from './slices';
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';



const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
const store = configureStore({ reducer: combineReducers({
	masterState: rootReducer,
}), devTools: true });

root.render(
  <React.StrictMode>
    <Provider store={store}>
			<ToastContainer closeButton={true}  />

      <BrowserRouter basename={''}>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
