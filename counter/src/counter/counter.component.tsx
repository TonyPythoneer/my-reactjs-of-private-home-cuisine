/// <reference path="./typings/counter.d.ts"/>
import { IProps } from "counter";

import * as React from 'react';


export default class Counter extends React.Component<IProps, any> {
    render() {
        const { actions, value } = this.props;
        return (
            <div>
                <span>Clicked: { value } times</span>
                <button onClick={actions.addOne}>+</button>
                <button onClick={actions.reduceOne}>-</button>
                <button onClick={actions.addOneIfOdd}>addOneIfOdd</button>
                <button onClick={(e: Event) => actions.addOneAsync()}>addOneAsync</button>
            </div>
        )
    }
}
