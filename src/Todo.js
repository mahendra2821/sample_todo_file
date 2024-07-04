import React from 'react';

function Todo({ todo, removeTodo }) {
  return (
    <div className="todo-row">
      {todo.text}
      <div className="icons">
        <button onClick={() => removeTodo(todo.id)} className="delete-icon">
          Delete
        </button>
      </div>
    </div>
  );
}

export default Todo;
