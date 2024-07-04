import React from 'react';
import Todo from './Todo';

function TodoList({ todos, removeTodo }) {
  return (
    <div>
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} removeTodo={removeTodo} />
      ))}
    </div>
  );
}

export default TodoList;
