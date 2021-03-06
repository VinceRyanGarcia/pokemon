import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";


//imports
import {Provider} from "react-redux";
import Store from "./Store";

ReactDOM.render(
    <BrowserRouter>
    <Provider store={Store}>
    <App />
    </Provider>
    </BrowserRouter>,

  document.getElementById('root')
);

