import {connect} from 'react-redux';
import {toggleTodo} from '../actions/index';
import TodoList from './TodoList';

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    default:
      return todos;
  }
};

const mapStateToProps = (state) => {
  return {
    todos: getVisibleTodos(state.todos, "")
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onTodoClick: (id) => {
      dispatch(toggleTodo(id))
    }
  }
};

const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);

export default VisibleTodoList;