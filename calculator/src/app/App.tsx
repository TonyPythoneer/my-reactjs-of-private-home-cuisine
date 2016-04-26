/// <reference path="./typings/App.d.ts"/>
import { IProps } from "App";

import * as React from 'react';
import { createStore, bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import reducer from './reducer';


// App
class App extends React.Component<IProps, any> {
    render() {
        const { } = this.props;
        return (
            <componentName />
        )
    }
}


// connect
function mapStateToProps(state) {
    return {
        //counter: state.counter
    };
}


function mapDispatchToProps(dispatch) {
    return {
        //counterActions: bindActionCreators(counterActions, dispatch)
    };
}


export default connect(mapStateToProps, mapDispatchToProps)(App)
