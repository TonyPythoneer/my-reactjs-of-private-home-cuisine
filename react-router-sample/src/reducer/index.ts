import { combineReducers } from "redux";
const { routerReducer } = require('react-router-redux');


export default <Redux.Reducer>combineReducers({
	routing: routerReducer
});
