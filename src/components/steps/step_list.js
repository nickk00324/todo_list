import React from 'react';
import StepListItemContainer from './step_list_item_container';
import StepListForm from './step_list_form';

const StepList = ({ steps, todoID, receiveStep }) => {

    const stepsList = steps.map( step => {
        return <StepListItemContainer step={step} key={step.id} />
    })

    return (
      <div>
        <ul>{stepsList}</ul>
        <StepListForm todoID={todoID} receiveStep={receiveStep} />
      </div>
    );
}

export default StepList;