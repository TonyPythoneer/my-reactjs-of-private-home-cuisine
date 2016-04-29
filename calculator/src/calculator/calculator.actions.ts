import * as C from "./calculator.constants";


const actions = {
	inputNumber: (number: string) => ({ type: C.INPUT_NUMBER, number }),
	inputOperator: (op: string) => ({ type: C.INPUT_OPERATOR, op }),
	clickClean: (number: string) => ({ type: C.CLICK_CLEAN, number }),
	clickAllClean: (number: string) => ({ type: C.CLICK_ALL_CLEAN, number }),
}


export default actions;
