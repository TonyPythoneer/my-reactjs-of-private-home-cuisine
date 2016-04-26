import { combineReducers } from "redux";

import counter from '../counter/counter.reducers'


export default <Redux.Reducer>combineReducers({
    counter,
});

