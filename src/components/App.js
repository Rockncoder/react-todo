import React, { Component } from 'react';
import AddTodo from './AddTodo';
import VisibleTodoList from './VisibleTodoList';

class App extends Component {
  render() {
    return (
      <div>
        <h1>ToDos</h1>
        <AddTodo />
        <VisibleTodoList />
      </div>
    );
  }
}

export default App;
