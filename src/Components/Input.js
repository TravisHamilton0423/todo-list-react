import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import uuid from 'react-uuid';
import { TODO_ADD, TODO_EDIT } from '../Todos/Redux/constants';
const Input = ({
  addTodo,
  todos,
  currentState,
  setEdit
}) => {
  useEffect(() => {
    setText(currentState ? todos.find((todo) => todo.id === currentState).content : "")
  }, [currentState])
  const [text, setText] = useState("");

  const onClick = () => {
    if(text === "") return;
    if(currentState) {
      setEdit(currentState, text);
    } else {
      addTodo({
        id: uuid(),
        content: text
      })
    }
    setText("");
  }

  const onChange = (e) => {
    e.preventDefault();
    setText(e.target.value);
  }

  return (
    <div className="form-group">
      <input
        className="form-field"
        type="email"
        placeholder="Type Todo Content"
        value={text}
        onChange={onChange}
      />
      <span onClick={onClick}>{currentState ? 'Edit Todo' : 'Add New Todo'}</span>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    currentState: state.todoReducer.currentState,
    todos: state.todoReducer.todos
  }};

const mapDispatchToProps = dispatch => ({
  addTodo: (data) => dispatch({
    type: TODO_ADD,
    data
  }),
  setEdit: (id, data) => dispatch({
    type: TODO_EDIT,
    id,
    data
  })
});

export default connect(mapStateToProps, mapDispatchToProps)(Input);