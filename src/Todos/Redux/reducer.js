import {
  TODO_ADD,
  TODO_DELETE,
  TODO_EDIT,
  TODO_SET_STATE
} from './constants';

const defaultState = {
  todos: [
    {
      id: 1,
      content: 'React is JS library',
    },
    {
      id: 2,
      content: 'Redux is State Management Library'
    }
  ],
  currentState: 0
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case TODO_SET_STATE:
      return {
        ...state,
        currentState: action.data
      }
    case TODO_ADD:
      console.log(action)
      return {
        ...state,
        todos: [...state.todos, action.data]
      };
    case TODO_DELETE:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.id)
      };
    case TODO_EDIT:
      return {
        ...state,
        currentState: 0,
        todos: state.todos.map((todo) => todo.id===action.id ? {
          id: action.id,
          content: action.data
        }: todo)
      };
    default:
      return state;
  }
};