/// <reference path="./app.d.ts" />


/* TodoList */
class TodoList extends React.Component<ITodoListProps, {}> {
    render() {
        let createItem = (item) => <li key={item.id}>{item.text}</li>;
        return <ul>{this.props.items.map(createItem) }</ul>;
    }
}


/*
 * TodoApp
 *
 * You need to know some definitions:
 *   Event: https://github.com/Microsoft/TypeScript/blob/7ae6fcd65ef48ef33f62883e7bd64a3634c15333/lib/lib.webworker.d.ts
 *
 * How do define event.target.* object:
 *   http://stackoverflow.com/questions/33256274/typesafe-select-onchange-event-using-reactjs-and-typescript/33262554#33262554
 */
class TodoApp extends React.Component<{}, ITodoAppState> {
    private onChange: (e: Event) => void;
    private handleSubmit: (e: Event) => void;

    constructor() {
        super()
        // getInitialState
        this.state = { items: [], text: '' };

        // actions
        this.onChange = (e) => {
            // UI process: Only change text by inputting the value
            this.setState({ text: (event.target as any).value });
        };
        this.handleSubmit = (e) => {
            e.preventDefault();
            // Data process: Add new item to items
            let nextItems = this.state.items.concat([{
                text: this.state.text,
                id: Date.now(),
            }]);
            // Data process: Erase text field
            let nextText = '';
            // Data process: Set the lastest result to state
            this.setState({ items: nextItems, text: nextText });
        };
    }
    render() {
        return (
            <div>
                <h3>TODO</h3>
                <TodoList items={this.state.items} />
                <form onSubmit={this.handleSubmit}>
                    <input onChange={this.onChange} value={this.state.text} />
                    <button>{'Add #' + (this.state.items.length + 1) }</button>
                </form>
            </div>
        );
    }
}


ReactDOM.render(
    <TodoApp />,
    document.getElementById('example')
);
