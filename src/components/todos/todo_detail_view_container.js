import TodoDetailView from './todo_detail_view';
import { connect } from 'react-redux';
import { removeTodo } from '../../actions/todo_actions';
import { receiveSteps } from '../../actions/steps_actions';

const mapDispatchToProps = dispatch => ({
    removeTodo: todo => dispatch(removeTodo(todo)),
    receiveSteps: steps => dispatch(receiveSteps(steps))
})

export default connect(null, mapDispatchToProps)(TodoDetailView);