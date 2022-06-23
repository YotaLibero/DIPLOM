import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import createExperimentReducer from './reducers/CreateExperimentReducer';


const rootReducer = combineReducers({
	createExperiment: createExperimentReducer
});


let store = createStore(rootReducer, applyMiddleware(thunk));

export default store;