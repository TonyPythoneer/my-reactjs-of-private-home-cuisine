import * as React from 'react';
import { createStore } from 'redux';
import { connect } from 'react-redux';

import reducer from './reducer';
import Counter from '../counter/counter.component';
import CounterApp from '../counter/counter.container';


class App extends React.Component<any, any> {
    render() {
        const { dispatch, counter } = this.props
        console.log("App: ", this.props)
        return (
            <div>
                <CounterApp
                    dispatch={ dispatch }
                    counter={ counter } />
            </div>
        )
    }
}


function mapStateToProps(state) {
    return { counter: state.counter };
}

interface IState {
    value: number;
}
export default connect(mapStateToProps)(App)