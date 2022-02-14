/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
import React from 'react';
import './TodoList.css';

function TodoList({
  // eslint-disable-next-line react/prop-types
  todos, setTodos,
}) {
  const updateTask = (id) => {
    // eslint-disable-next-line react/prop-types
    const updatedTasks = todos.map((todo) => {
      if (todo.id === id) {
        // eslint-disable-next-line no-param-reassign
        todo.completed = !todo.completed;
        return todo;
      }
      return todo;
    });
    setTodos(updatedTasks);
  };

  return (
    <div className="todolist-container">
      <div className="todos-container">
        <div>
          { todos.length > 0
            ? todos.map((todo) => (
              <div
                key={todo.id}
                className={`todo-item ${todo.completed && 'todo-item-active'}`}
                onClick={() => updateTask(todo.id)}
              >
                {todo.task}
              </div>
            )) : <h3>Loading...</h3>}
        </div>
      </div>
    </div>
  );
}

export default TodoList;
