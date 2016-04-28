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
            let defualtTextNum = action.number === '.' ? '0' : '';
            let currentTextNum = state.fresh ?
                defualtTextNum : state.textNum;
            let newTextNum = currentTextNum + action.number;
            return objectAssign({}, state, {
                textNum: newTextNum,
                fresh: false,
            })
        case C.INPUT_OPERATOR:
            let newOp = action.op === '=' ? null: action.op;
            if (state.regOp) {
                let result = excuteExpression(state)
                return objectAssign({}, {
                    regOp: newOp,
                    textNum: result,
                    regNum: result,
                    fresh: true,
                })
            } else {
                return objectAssign({}, state, {
                    regOp: newOp,
                    regNum: state.textNum,
                    fresh: true,
                })
            }
        case C.CLICK_CLEAN:
            return objectAssign({}, state, {
                textNum: "0",
                fresh: true,
            })
        case C.CLICK_ALL_CLEAN:
            return objectAssign({}, state, {
                textNum: "0",
                regNum: 0,
                textOp: null,
                regOp: null,
                fresh: true,
            })
        default:
            return state;
    }
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