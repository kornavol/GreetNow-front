import {combineReducers} from 'redux';
import currText from './currText';
import currPict from './currPict';
import {eventsList, categoriesList} from './initialData';

const allReducers = combineReducers({
    currText: currText,
    currPict: currPict,
    events:eventsList,
    categories:categoriesList
})
export default allReducers;
