import {combineReducers} from 'redux';
import currText from './currText';

const allReducers = combineReducers({
    currText: currText
})
export default allReducers;
