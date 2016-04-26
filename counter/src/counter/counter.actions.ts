/// <reference path="./typings/counter.d.ts"/>
import { IReducer } from "counter";

import * as C from "./counter.constants";


export function addOne(): any {
    return { type: C.ADD_ONE };
}


export function reduceOne(): any {
    return { type: C.REDUCE_ONE };
}


export function addOneIfOdd(): ReduxThunk.ThunkInterface {
    return (dispatch: Redux.Dispatch, getState: () => IReducer) => {
        const { counter } = getState();

        if (counter.value % 2 === 0) { return; }

        dispatch(addOne());
    };
}


export function addOneAsync(delay: number = 1000): ReduxThunk.ThunkInterface {
    return (dispatch: Redux.Dispatch) => {
        setTimeout(() => {
            dispatch(addOne());
        }, delay);
    };
}
