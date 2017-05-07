let nextTodoId = 0;

// Action
export const addTodo = (text) => {
  return {
    type: 'ADD_TODO',
    id: nextTodoId++,
    text
  }
};

export const toggleTodo = (id) => {
  return {
    type: 'TOGGLE_TODO',
    id
  }
};
