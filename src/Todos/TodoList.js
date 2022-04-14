import React from 'react';
import { connect } from 'react-redux';
import Input from '../Components/Input';
import Table from '../Components/Table';

const TodoList = ({
  todos
}) => {
  const header = ['id', 'Content'];
  let body = todos.map((todo) => [todo.id, todo.content]);
  return (
    <React.Fragment>
      <Input />
      <Table tableBody={body} tableHeader={header} isTodos={true} />
    </React.Fragment>
  )
}

const mapStateToProps = state => {
  return {
    todos: state.todoReducer.todos
  }
};

export default connect(mapStateToProps)(TodoList);