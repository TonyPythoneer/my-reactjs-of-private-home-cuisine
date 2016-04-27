import * as _ from "lodash";

import * as C from "./calculator.constants";


const initialState = {
    textNum: "0",
    regNum: "0",
    textOp: null,
    regOp: null,
    fresh: false,
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
            return _.assign({}, state, {
                textNum: newTextNum,
                fresh: false,
            })
        case C.INPUT_OPERATOR:
            let newOp = action.op === '=' ? null: action.op;
            if (state.regOp) {
                let result = excuteExpression(state)
                return _.assign({}, {
                    regOp: newOp,
                    textNum: result,
                    regNum: result,
                    fresh: true,
                })
            } else {
                return _.assign({}, state, {
                    regOp: newOp,
                    regNum: state.textNum,
                    fresh: true,
                })
            }
        case C.CLICK_CLEAN:
            return _.assign({}, state, { textNum: "0" })
        case C.CLICK_ALL_CLEAN:
            return _.assign({}, state, {
                textNum: "0",
                regNum: 0,
                textOp: null,
                regOp: null,
                fresh: false,
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