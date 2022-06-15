import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import createExperimentReducer from './CreateExperimentReducer.js';


const rootReducer = combineReducers({
	createExperiment: createExperimentReducer
});


let store = createStore(rootReducer, applyMiddleware(thunk));

export default store;