import React, { useState } from 'react';
import TodoDetailView from './todo_detail_view';
import { toggleDone } from '../../util/helpers';

const TodoListItem = ({ todo, removeTodo, receiveTodo }) => {
    
    const [showDetail, setShowDetail] = useState(false);

    const toggleDetails = () => setShowDetail(!showDetail);

    let detail = showDetail ? <TodoDetailView 
                                todo={todo} 
                                removeTodo={removeTodo} 
                                toggleDone={toggleDone} 
                                receiveTodo={receiveTodo} />
                                :
                                null;
    
    return (
        <div>
            <li onClick={toggleDetails}>{todo.title}</li>
            {detail}
        </div>
    )
}

export default TodoListItem;