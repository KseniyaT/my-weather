import { combineReducers } from 'redux'; // eslint-disable-line no-unused-vars
import forecast from './forecast';

const reducers = combineReducers({
  forecast,
});

export default reducers;
