import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import createExperimentReducer from './reducers/CreateExperimentReducer';
import OpenExperimentReducer from './reducers/OpenExperimentReducer';


const rootReducer = combineReducers({
	createExperiment: createExperimentReducer,
	openExperiment: OpenExperimentReducer
});


let store = createStore(rootReducer, applyMiddleware(thunk));

export default store;