// Constants for actions
export const ADD_ONE = 'ADD_ONE';
export const REDUCE_ONE = 'REDUCE_ONE';
export const ADD_ONE_IF_ODD = 'ADD_ONE_IF_ODD';
export const ASNYNC_ADD_ONE = 'ASNYNC_ADD_ONE';


// Actions list
export type Action = {
    type: string,
    value: number
};


export function addOne(value: number = 1) {
    return { type: ADD_ONE, value };
}


export function reduceOne(value: number = -1) {
    return { type: REDUCE_ONE, value };
}


export function addOneIfOdd(value: number = 1) {
    return { type: ADD_ONE_IF_ODD, value };
}


export function asntncAddOne(value: number = 1) {
    return { type: ASNYNC_ADD_ONE, value };
}
