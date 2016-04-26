import * as React from 'react';
import Counter from './counter.component';
import { addOne, reduceOne } from './counter.actions'


export default class CounterApp extends React.Component<any, any> {
    render() {
        console.log("Counter: ", this.props)
        const { dispatch, counter } = this.props;
        return (
            <Counter
                counter={ counter }
                onAddClick={ num => dispatch(addOne(num)) }
                onReduceClick={ num => dispatch(reduceOne(num)) }
            />
        )
    }
}
