import React, { Fragment } from 'react';
import TodoListItem from './todo_list_item';
import TodoForm from './todo_form';

const TodoList = ({ todos, receiveTodo, removeTodo }) => {
    

    const todoItems = todos.map( todo => (
        <TodoListItem key={todo.id} todo={todo} removeTodo={removeTodo} receiveTodo={receiveTodo}/>
    ))

    return (
        <Fragment>
            <TodoForm receiveTodo={receiveTodo}/>
            <ul>
                {todoItems}
            </ul>
        </Fragment>
    )
}

export default TodoList;