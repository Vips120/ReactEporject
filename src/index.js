import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reducers from "./redux/store/index";
import thunk from "redux-thunk";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
ReactDOM.render(
    <Provider store={createStore(reducers,applyMiddleware(thunk))}>
        <BrowserRouter>
        <App />
        </BrowserRouter>
    </Provider >
    ,
     document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();