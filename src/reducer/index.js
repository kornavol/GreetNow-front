import {combineReducers} from 'redux';
import currText from './currText';
import currImg from './currImg';

const allReducers = combineReducers({
    currText: currText,
    currImg: currImg
})
export default allReducers;
