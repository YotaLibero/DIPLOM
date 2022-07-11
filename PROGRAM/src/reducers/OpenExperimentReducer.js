const ACTION_LIST_OF_EXPERIMENTS = 'ACTION_LIST_OF_EXPERIMENTS';

const initialState = {
	
	listOfExperiments: []
}


export const changeListOfExperiments = (newlist) => {
	return {
		type: ACTION_LIST_OF_EXPERIMENTS,
		data: newlist
	}
}


function OpenExperimentReducer(state = initialState, action) {
	switch(action.type) {
		case ACTION_LIST_OF_EXPERIMENTS:
			return Object.assign({}, state, {listOfExperiments: action.data})
		default: 
			return state;
	}
}

export default OpenExperimentReducer;