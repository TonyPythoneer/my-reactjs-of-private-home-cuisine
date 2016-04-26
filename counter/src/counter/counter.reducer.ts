/// <reference path="./typings/counter.d.ts"/>
import { IState } from "counter";

import * as C from "./counter.constants";


const initialState: IState = { value: 1 };


export default function counter(
    state: IState = initialState,
    action): IState {
    switch (action.type) {
        case C.ADD_ONE:
			return { value: state.value + 1 }
        case C.REDUCE_ONE:
            return { value: state.value - 1 }
        default:
            return state;
    }
}
