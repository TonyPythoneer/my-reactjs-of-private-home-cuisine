/// <reference path="./typings/App.d.ts"/>
import { IProps } from "App";

import * as React from 'react';
import { createStore, bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import reducer from './reducer';
import Counter from '../counter/counter.component';
import CounterApp from '../counter/counter.container';
import * as counterActions from '../counter/counter.actions';


// App
interface IAppProp {
    dispatch: Redux.Dispatch,
}



class App extends React.Component<IProps, any> {
    render() {
        const { counter, counterActions } = this.props
        return (
            <div>
                <CounterApp
                    actions={ counterActions }
                    value={ counter.value } />
            </div>
        )
    }
}


// connect
function mapStateToProps(state) {
    return { counter: state.counter };
}


function mapDispatchToProps(dispatch) {
    return {
        counterActions: bindActionCreators(counterActions, dispatch)
    };
}


export default connect(mapStateToProps, mapDispatchToProps)(App)
