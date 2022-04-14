import { combineReducers } from 'redux';

import todoReducer from '../Todos/Redux/reducer';

export default combineReducers({
  todoReducer,
});