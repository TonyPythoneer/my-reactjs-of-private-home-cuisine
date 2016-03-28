import marked = require('marked');


interface IMarkdownEditorState {
    value: string,
}


class MarkdownEditor extends React.Component<{},IMarkdownEditorState> {
    state = { value: 'Type some *markdown* here!' };
    refs: {
        [key: string]: React.ReactInstance;
        textarea: any;
    }
    handleChange() {
        this.setState({ value: this.refs.textarea.value });
    }
    rawMarkup() {
        return { __html: marked(this.state.value, { sanitize: true }) };
    }
    render() {
        return (
            <div className="MarkdownEditor">
                <h3>Input</h3>
                <textarea
                    onChange={this.handleChange.bind(this)}
                    ref="textarea"
                    defaultValue={this.state.value} />
                <h3>Output</h3>
                <div
                    className="content"
                    dangerouslySetInnerHTML={this.rawMarkup() }
                    />
            </div>
        );
    }
}


ReactDOM.render(
    <MarkdownEditor />,
    document.getElementById('example')
);
