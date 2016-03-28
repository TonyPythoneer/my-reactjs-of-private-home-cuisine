/*
 * Please refer this coding style:
 *   https://github.com/DefinitelyTyped/DefinitelyTyped/blob/05746119789e2e2ab2206988643657a04229491c/react/react-tests.ts#L435
 */
interface State {
    secondsElapsed: number,
}


class Timer extends React.Component<{}, State> {
    public state = {
        secondsElapsed: 0
    };
    private _interval: number;
    tick() {
        this.setState((prevState, props) => ({
            secondsElapsed: prevState.secondsElapsed + 1
        }));
    }
    componentDidMount() {
        this._interval = setInterval(() => this.tick(), 1000);
    }
    componentWillUnmount() {
        clearInterval(this._interval);
    }
    render() {
        return (
            <div>Seconds Elapsed: {this.state.secondsElapsed}</div>
        );
    }
}


ReactDOM.render(
    <Timer />,
    document.getElementById('example')
);
