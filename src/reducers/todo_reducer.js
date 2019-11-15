import { RECEIVE_TODOS, RECEIVE_TODO, REMOVE_TODO } from '../actions/todo_actions';


const initialState = {
  1: {
    id: 1,
    title: "wash car",
    body: "with soap",
    done: false
  },
  2: {
    id: 2,
    title: "wash dog",
    body: "with shampoo",
    done: true
  }
};

const todoReducer = ( state = initialState, action) => {
    switch(action.type){
        case RECEIVE_TODOS:
            let newState = {};
            action.todos.forEach(ele => {
                newState[ele.id] = ele;
            });
            return newState;
        case RECEIVE_TODO:
            let newTodo = { [action.todo.id]: action.todo }
            return Object.assign( {}, state, newTodo);
        case REMOVE_TODO:
            let newTodos = Object.assign( {}, state);
            delete newTodos[action.todo.id];
            return newTodos;
        default:
            return state;
    }
}

export default todoReducer;