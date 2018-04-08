import { combineReducers } from 'redux';
import countriesReducer  from './countries-reducer';

// This combines used reducers.
const reducers = combineReducers({
    countriesReducer
});

export default reducers;