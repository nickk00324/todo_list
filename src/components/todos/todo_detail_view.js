import React from 'react';
import StepListContainer from '../steps/step_list_container';

const TodoDetailView = ({ todo, removeTodo, receiveTodo, toggleDone }) => (
  <div>
    <p>{todo.body}</p>
    <StepListContainer todoID={todo.id}/>
    <button onClick={() => removeTodo(todo)}>delete</button>
    <button onClick={() => receiveTodo(toggleDone(todo))}>done</button>
  </div>
);

export default TodoDetailView;