import {combineReducers} from 'redux';
import currText from './currText';
import currPict from './currPict';

const allReducers = combineReducers({
    currText: currText,
    currPict: currPict
})
export default allReducers;
