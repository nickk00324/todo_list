export const allTodos = state => (
    Object.keys(state.todos).map(ele => state.todos[ele])
);

export const stepsByTodoID = ({steps}, todoID) => {

    let stepsByID = [];

    Object.keys(steps).forEach( step => {
        if(steps[step].todoID === todoID){
            stepsByID.push(steps[step])
        }
    })

    return stepsByID;
}


