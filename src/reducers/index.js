import { combineReducers } from 'redux';
import logReducer from './logReducer';

export default combineReducers({
  log: logReducer // log is what we are calling our state
});
