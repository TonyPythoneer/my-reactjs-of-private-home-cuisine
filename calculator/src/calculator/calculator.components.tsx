import * as React from 'react';


export class CalculatorBoard extends React.Component<any, any > {
    private _board: string[][] = [
        [null, '7', '8', '9', '/'],
        [null, '4', '5', '6', '*'],
        ['c', '1', '2', '3', '+'],
        ['ac', '0', '.', '=', '-'],
    ]
    boardElement: JSX.Element[];
    componentWillMount(){
        this.boardElement = this._board.map((row: string[] , index: number) => {
            let cellElements = row.map((cell: string) => {
                return this.renderButton.bind(this)(cell)
            })
            return <div>{cellElements}</div>;
        });
    }
    renderButton(cell) {
        const { actions } = this.props;
        let event;
        if (cell === null) { return <span/> }
        if (['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'].indexOf(cell) !== -1) {
            event = actions.inputNumber;
        } else if (['+', '-', '*', '/', '='].indexOf(cell) !== -1) {
            event = actions.inputOperator;
        } else if (cell === 'c') {
            event = actions.clickClean;
        } else if (cell === 'ac') {
            event = actions.clickAllClean;
        }
        return <button onClick={() => event(cell) }>{cell}</button>
    }
    render() {
        const { children } = this.props;
        return (
            <div>
                { children }
                { this.boardElement }
            </div>
        )
    }
}


export class CalculatorMonitor extends React.Component<any, any> {
    render() {
        return <div>{this.props.textNum}</div>
    }
}
