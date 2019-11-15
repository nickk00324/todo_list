export const toggleDone = todo => {
  let updatedTodo = Object.assign({}, todo);
  updatedTodo.done = !updatedTodo.done;
  console.log(updatedTodo);
  return updatedTodo;
};
