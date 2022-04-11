import { createStore } from 'redux';
import reducer from './Redux/reducer';

const initialState = { 
  todos: [],
  members: [],
  teams: []
};

export const store = createStore(reducer, initialState);