import React, { useState } from 'react';

const StepListForm = props => {

    const [inputValue, setInputValue] = useState('');

    const getInput = e => {
        setInputValue(e.target.value);
    }

    const submitInput = () => {
        const newStep = {
            id: uniqueID(),
            title: inputValue,
            done: false,
            todoID: props.todoID
        }
        props.receiveStep(newStep);
        setInputValue('');
    }

    const uniqueID = () => new Date().getTime()

    const handleKeyPress = e => { if(e.key === 'Enter') submitInput()}

    return(
        <div>
            <input type='text' onChange={getInput} placeholder="add step..." onKeyPress={handleKeyPress} value={inputValue}/>
            <button onClick={submitInput}>submit</button>
        </div>
    )
}

export default StepListForm;