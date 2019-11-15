import React, { useState } from 'react';


const TodoForm = props => {

    const [inputValue, setInputValue] = useState('');

    const getInput = event => {
        setInputValue(event.target.value);
    }

    const submitInput = () => {
        const newTodo = {
            id: uniqueID(),
            title: inputValue,
            body: '',
            done: false
        }
        props.receiveTodo(newTodo);
        setInputValue('');
    }

    const uniqueID = () => new Date().getTime()

    const handleKeyPress = e => {
        if(e.key === 'Enter'){
            submitInput();
        }
    }


    return(
        <div>
            <input onChange={getInput} type="text" value={inputValue} onKeyPress={handleKeyPress}/>
            <button onClick={submitInput}>submit</button>
        </div>
    )
}

export default TodoForm;