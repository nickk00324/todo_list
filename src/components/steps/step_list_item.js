import React from 'react';
import { toggleDone } from '../../util/helpers';

const StepListItem = ({ step, removeStep, receiveStep }) => (
  <div>
    <p>{step.title}</p>
    <p>{step.body}</p>
    <button onClick={() => removeStep(step)}>delete</button>
    <button onClick={() => receiveStep(toggleDone(step))}>done</button>
  </div>
);

export default StepListItem;