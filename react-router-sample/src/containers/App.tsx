import * as React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import * as connectArgs from '../store/connect-args';


@connect(connectArgs.mapStateToProps, connectArgs.mapDispatchToProps)
export default class App extends React.Component<any, any> {
    render() {
        const { children } = this.props;
        console.log(this.props)
        return (
            <div>
            	<h1>fuck!</h1>
                <ul>
                    <li><Link to='/'>Index</Link></li>
                    <li><Link to='/fuck'>fuck</Link></li>
                    <li><Link to='/duck'>duck</Link></li>
                </ul>
				{ children }
            </div>
        )
    }
}
