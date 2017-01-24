//this set up for many reducer
import {combineReducers} from 'redux';
import userReducer from './userReducer.js';

export default combineReducers({userReducer:userReducer}) //this is what mapsToProps takes 
