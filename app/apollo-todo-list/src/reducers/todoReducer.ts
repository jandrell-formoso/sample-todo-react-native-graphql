import { ACTION_TYPES } from "../utils/constants";

const todoReducer = (state: any, action: any) => {
  switch (action.type) {
    case ACTION_TYPES.ADD_TODO:
      return { todoList: state.todoList.push(action.todo) };

    default:
      return state;
  }
};

export default todoReducer;
