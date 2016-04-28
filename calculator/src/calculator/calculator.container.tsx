import * as React from 'react';

import {CalculatorBoard, CalculatorMonitor} from './calculator.components';


export default class CalculatorApp extends React.Component<any, any> {
    render() {
        const { textNum, textOp, actions } = this.props;
        return (
            <CalculatorBoard actions={ actions }>
                <CalculatorMonitor textNum={ textNum } textOp= {textOp}/>
            </CalculatorBoard>
        )
    }
}