interface Props {

}

interface State {
    secondsElapsed: number,
}


class Timer extends React.Component<Props, State> {
    private interval: number;
    constructor(props: Props) {
        super(props)
    }
    getInitialState() {
        return { secondsElapsed: 0 };
    }
    tick() {
        this.setState({ secondsElapsed: this.state.secondsElapsed + 1 });
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
