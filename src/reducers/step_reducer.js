import { RECEIVE_STEP, REMOVE_STEP } from '../actions/steps_actions';

const stepReducer = (state={}, action) => {
    switch(action.type){
        case RECEIVE_STEP:
            let newStep = { [action.step.id] : action.step }
            return Object.assign( {} , state, newStep )
        case REMOVE_STEP:
            let newSteps = Object.assign( {} , state );
            delete newSteps[action.step.id];
            return newSteps;
        default:
            return state;
    }
}

export default stepReducer;