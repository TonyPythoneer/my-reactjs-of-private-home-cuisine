interface State {
    secondsElapsed: number,
}

class Timer extends React.Component<{}, State> {
    private interval: number;
    private tick: () => void;
    constructor() {
        super()
        this.state = {
            secondsElapsed: 0
        };
        this.tick = () => {
            this.setState({ secondsElapsed: this.state.secondsElapsed + 1 });
        }
    }
    componentDidMount() {
        this.interval = setInterval(this.tick, 1000);
    }
    componentWillUnmount() {
        clearInterval(this.interval);
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
