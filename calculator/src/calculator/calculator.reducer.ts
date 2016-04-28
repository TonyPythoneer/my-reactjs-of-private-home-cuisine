import objectAssign from "./../utils/object-assign";
import * as C from "./calculator.constants";


const initialState = {
    textNum: "0",
    regNum: "0",
    textOp: null,
    regOp: null,
    fresh: true,
};


export default function calculator(
    state = initialState,
    action) {
    switch (action.type) {
        case C.INPUT_NUMBER:
            return objectAssign({}, state, inputNumberEvent(state, action));
        case C.INPUT_OPERATOR:
            return objectAssign({}, state, inputOperatorEvent(state, action));
        case C.CLICK_CLEAN:
            return objectAssign({}, state, { textNum: "0", fresh: true })
        case C.CLICK_ALL_CLEAN:
            return objectAssign({}, state, initialState)
        default:
            return state;
    }
}


function inputNumberEvent(state, action){
    // Don't change textNum when monintor is 0 if inputting 0
    if (state.textNum === "0" && action.number === "0") { return };
    if (action.number === "." && state.textNum.indexOf('.') !== -1) { return };
    const defualtTextNum = action.number === '.' ? '0' : '';
    const currentTextNum = state.fresh ? defualtTextNum : state.textNum;
    const newTextNum = currentTextNum + action.number;
    return { textNum: newTextNum, fresh: false }
}


function inputOperatorEvent(state, action) {
    const regOp = action.op === '=' ? null : action.op;
    const updateState = { regOp, fresh: true };

    // excute express when operator had existed in state
    if (state.regOp) {
        let r = excuteExpression(state);
        return objectAssign(updateState, { textNum: r, regNum: r });
    }
    return objectAssign(updateState, { regNum: state.textNum });
}


function excuteExpression({regOp, regNum, textNum}) {
    textNum = parseFloat(textNum)
    regNum = parseFloat(regNum)
    switch (regOp) {
        case '+':
            return regNum += textNum;
        case '-':
            return regNum -= textNum;
        case '*':
            return regNum *= textNum;
        case '/':
            return regNum /= textNum;
    }
}
