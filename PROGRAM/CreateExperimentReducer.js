const ACTION_CHANGE_NAME = 'ACTION_CHANGE_NAME';

const ACTION_CHANGE_LVLAR = 'ACTION_CHANGE_LVLAR';
const ACTION_CHANGE_PHI_1 = 'ACTION_CHANGE_PHI_1';
const ACTION_CHANGE_PHI_2 = 'ACTION_CHANGE_PHI_2';
const ACTION_CHANGE_PHI_3 = 'ACTION_CHANGE_PHI_3';

const ACTION_CHANGE_Y_01 = 'ACTION_CHANGE_Y_01';
const ACTION_CHANGE_Y_02 = 'ACTION_CHANGE_Y_02';
const ACTION_CHANGE_Y_03 = 'ACTION_CHANGE_Y_03';

const ACTION_CHANGE_LVLMA = 'ACTION_CHANGE_LVLMA';
const ACTION_CHANGE_TETA_1 = 'ACTION_CHANGE_TETA_1';
const ACTION_CHANGE_TETA_2 = 'ACTION_CHANGE_TETA_2';

const ACTION_CHANGE_Y_00 = 'ACTION_CHANGE_Y_00';

const ACTION_CHANGE_GENERATOR_M = 'ACTION_CHANGE_GENERATOR_M';
const ACTION_CHANGE_GENERATOR_D = 'ACTION_CHANGE_GENERATOR_D';
const ACTION_CHANGE_GENERATOR_A = 'ACTION_CHANGE_GENERATOR_A';
const ACTION_CHANGE_GENERATOR_B = 'ACTION_CHANGE_GENERATOR_B';
const ACTION_CHANGE_GENERATOR_C = 'ACTION_CHANGE_GENERATOR_C';

const ACTION_CHANGE_Y_STAC = 'ACTION_CHANGE_Y_STAC';
const ACTION_CHANGE_ST = 'ACTION_CHANGE_ST';
const ACTION_CHANGE_SKO = 'ACTION_CHANGE_SKO';


const initialState = {
	name: null,
	
	lvl_ar: null,
	phi_1: null,
	phi_2: null,
	phi_3: null,
	
	y_01: null,
	y_02: null,
	y_03: null,
	
	lvl_ma: null,
	teta_1: null,
	teta_2: null,

	y_00: null,

	generator_m: null,
	generator_d: null,
	generator_a: null,
	generator_b: null,
	generator_c: null,

	generator_y_stac: null,
	generator_st: null,
	generator_sko: null
}

export const changeName = (newName) => {
	return {
		type: ACTION_CHANGE_NAME,
		data: newName
	}
}

export const changeLvlAR = (newLvlAR) => {
	return {
		type: ACTION_CHANGE_LVLAR,
		data: newLvlAR
	}
}

export const changePhi1 = (newphi1) => {
	return {
		type: ACTION_CHANGE_PHI_1,
		data: newphi1
	}
}

export const changePhi2 = (newphi2) => {
	return {
		type: ACTION_CHANGE_PHI_2,
		data: newphi2
	}
}

export const changePhi3 = (newphi3) => {
	return {
		type: ACTION_CHANGE_PHI_3,
		data: newphi3
	}
}

export const changeY01 = (newy01) => {
	return {
		type: ACTION_CHANGE_Y_01,
		data: newy01
	}
}

export const changeY02 = (newy02) => {
	return {
		type: ACTION_CHANGE_Y_02,
		data: newy02
	}
}

export const changeY03 = (newy03) => {
	return {
		type: ACTION_CHANGE_Y_03,
		data: newy03
	}
}

export const changeLvlMA = (newLvlMA) => {
	return {
		type: ACTION_CHANGE_LVLMA,
		data: newLvlMA
	}
}

function AuthorizationReducer(state = initialState, action) {
	switch(action.type) {
		case ACTION_CHANGE_LOGIN:
			return Object.assign({}, state, {name: action.data});
		case ACTION_CHANGE_LVLAR:
			return Object.assign({}, state, {lvl_ar: action.data});
		case ACTION_CHANGE_PHI_1:
			return Object.assign({}, state, {phi_1: action.data});
		
		default: 
			return state;
	}
}


export default AuthorizationReducer;