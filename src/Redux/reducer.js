import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import todoReducer from '../Todos/Redux/reducer';


export default combineReducers({
  todoReducer,
  router: routerReducer
});