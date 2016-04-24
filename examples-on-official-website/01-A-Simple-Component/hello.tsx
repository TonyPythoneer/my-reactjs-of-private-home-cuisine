class HelloProps {
	public name: string;
}


class HelloMessage extends React.Component<any, any> {
	constructor(props: HelloProps) {
		super(props);
	}
	render() {
		return <div>Hello {this.props.name}</div>
	}
}


let props: Object = {
	name: "John"
}


ReactDOM.render(
	<HelloMessage {...props} />,
	document.getElementById('example')
);
