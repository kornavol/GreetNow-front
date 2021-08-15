import {combineReducers} from 'redux';
import currText from './currText';
import currPict from './currPict';
import {eventsTable} from './initialData';

const allReducers = combineReducers({
    currText: currText,
    currPict: currPict,
    events:eventsTable
})
export default allReducers;
