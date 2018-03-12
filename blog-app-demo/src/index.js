import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import AppRouter from './routers/AppRouter';
import Reducers from './reducers/Reducers';
import ReduxPromise from 'redux-promise';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);
const store = createStoreWithMiddleware(Reducers);

ReactDOM.render(
	<Provider store={store}>
		<AppRouter/>
	</Provider>
	, document.getElementById('root'));
