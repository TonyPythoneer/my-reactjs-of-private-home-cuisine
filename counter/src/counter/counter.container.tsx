/// <reference path="./typings/counter.d.ts"/>
import { IProps } from "counter";

import * as React from 'react';
import Counter from './counter.component';
import { addOne, reduceOne } from './counter.actions'


export default class CounterApp extends React.Component<IProps, any> {
    render() {
        //const { actions , value } = this.props;
        return (
            <Counter {...this.props} />
        )
    }
}
