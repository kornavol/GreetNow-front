import {combineReducers} from 'redux';
import currText from './currText';
import currPict from './currPict';
import {eventsList, categoriesList} from './initialData';
import contacts from './contacts'
import contact from './contact';

const allReducers = combineReducers({
    currText,
    currPict,
    events:eventsList,
    categories:categoriesList,
    contacts,
    contact
})
export default allReducers;
