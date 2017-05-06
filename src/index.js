import { createStore,combineReducers,applyMiddleware } from 'redux';
import { HashRouter, Route, browserHistory } from 'react-router-dom';
import React from 'react';
import { Provider } from 'react-redux';
import reactDom from 'react-dom';
import reducers from './reducers/reducer';
import App from './containers/app';


const store = createStore(reducers);

reactDom.render(
	<Provider store={store}>
		<HashRouter >
		    <Route path="/" component={App} />
		</HashRouter> 
	</Provider>,document.getElementById('react')
	);