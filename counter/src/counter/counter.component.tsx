import * as React from 'react';


export default class Counter extends React.Component<any, any> {
    render() {
        const { counter } = this.props;
        return (
            <div>
                <span>Clicked: { counter.value } times</span>
                <button onClick={(e) => this.handleAddClick(e)}>Add</button>
            </div>
        )
    }
    handleAddClick(e) {
        this.props.onAddClick(1)
    }
}
