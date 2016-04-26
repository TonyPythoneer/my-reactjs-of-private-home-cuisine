import { Action, ADD_ONE, REDUCE_ONE, ADD_ONE_IF_ODD, ASNYNC_ADD_ONE } from './counter.actions';


interface IState {
    value: number
}
const initialState: IState = { value: 1 };


export default function counter(state: IState = initialState,
                 action: Action) {
    switch (action.type) {
        case ADD_ONE:
        case REDUCE_ONE:
        case ADD_ONE_IF_ODD:
        case ASNYNC_ADD_ONE:
            return { value: state.value + action.value }
        default:
            return state;
    }
}
