import {combineReducers} from 'redux';
import currText from './currText';
import currPict from './currPict';
import {eventsList, categoriesList} from './initialData';
import contacts from './contacts'

const allReducers = combineReducers({
    currText,
    currPict,
    events:eventsList,
    categories:categoriesList,
    contacts
})
export default allReducers;
