import React, { Component } from 'react';
import AddTodo from './AddTodo';

class App extends Component {
  render() {
    return (
      <div>
        <h1>ToDos</h1>
        <AddTodo />
      </div>
    );
  }
}

export default App;
