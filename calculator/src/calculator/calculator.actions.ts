import * as C from "./calculator.constants";

import { createAction } from "redux-actions";


export function inputNumber(number: string) {
    return { type: C.INPUT_NUMBER , number }
}


export function inputOperator(op: string) {
    return { type: C.INPUT_OPERATOR, op }
}


export function clickClean() {
    return { type: C.CLICK_CLEAN }
}


export function clickAllClean() {
    return { type: C.CLICK_ALL_CLEAN }
}
