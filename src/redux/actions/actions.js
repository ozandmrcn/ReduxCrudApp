import actionTypes from "../actionTypes";

const addTodo = (payload) => {
  return { type: actionTypes.add, payload: payload };
};

const updateToggle = (payload) => {
  return { type: actionTypes.toggle, payload: payload };
};

const updateTodo = (payload) => {
  return { type: actionTypes.update, payload: payload };
};

const deleteTodo = (payload) => {
  return { type: actionTypes.delete, payload: payload };
};

const setTodo = (payload) => {
  return { type: actionTypes.set, payload: payload };
};

export { deleteTodo, updateToggle, updateTodo, addTodo, setTodo };
