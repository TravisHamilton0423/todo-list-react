import {
  TODO_ADD,
  TODO_DELETE,
  TODO_EDIT
} from './constants';

const defaultState = {
  members: [],
  teams: [],
  todos: []
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case TODO_ADD:
      return {
        ...state,
        todos: [...state.todos, action.data]
      };
    case TODO_DELETE:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.data)
      };
    case TODO_EDIT:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.data)
      };
    default:
      return state;
  }
};