import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import reducer from './reducers';

// middleware that logs actions
//const loggerMiddleware = createLogger({ predicate: (getState, action) => __DEV__  });
const loggerMiddleware = createLogger();

function configureStore(initialState) {
	const enhancer = composeWithDevTools(
		applyMiddleware(
			thunkMiddleware, // lets us dispatch() functions
			loggerMiddleware
		)
	);
	return createStore(reducer, initialState, enhancer);
}

let initialStoreState = {
	records: [],
	lastInsertResult: {},
};

const store = configureStore(initialStoreState);

export default store;
