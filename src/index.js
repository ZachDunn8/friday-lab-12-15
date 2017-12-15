import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { combineReducers } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from './RootReducer';



const theStore = createStore(reducers)

ReactDOM.render(
	<Provider store={theStore}>
		<App />
	</Provider>, 
	document.getElementById('root'));
registerServiceWorker();
