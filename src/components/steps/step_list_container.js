import StepList from './step_list';
import { connect } from 'react-redux';
import { stepsByTodoID } from '../../reducers/selectors';
import { receiveStep } from '../../actions/steps_actions';

const mapStateToProps = (state, { todoID }) => ({
    steps: stepsByTodoID(state, todoID),
    todoID
})

const mapDispatchToProps = dispatch => ({
    receiveStep: step => dispatch(receiveStep(step))
})

export default connect(mapStateToProps, mapDispatchToProps)(StepList);
