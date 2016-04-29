import * as React from 'react';
import { createStore, bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import reducer from './reducer';
import calculatorActions from '../calculator/calculator.actions'
import CalculatorApp from '../calculator/calculator.container'


// App
class App extends React.Component<any, any> {
    render() {
        const { calculator, calculatorActions } = this.props;
        return (
            <CalculatorApp
                textNum={calculator.textNum}
                textOp={calculator.textOp}
                actions={calculatorActions}/>
        )
    }
}


// connect
function mapStateToProps(state) {
    return {
        calculator: state.calculator
    };
}


function mapDispatchToProps(dispatch) {
    return {
        calculatorActions: bindActionCreators(calculatorActions, dispatch)
    };
}


export default connect(mapStateToProps, mapDispatchToProps)(App)
