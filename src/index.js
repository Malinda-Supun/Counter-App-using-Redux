import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers } from 'redux';
import { Provider } from "react-redux";
import CounterReducer from "./store/reduces/counter";
import ResultReducer from "./store/reduces/results";

const rootReducer = combineReducers({
    ctr: CounterReducer,
    res: ResultReducer,
});


const store = createStore(rootReducer);


ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
