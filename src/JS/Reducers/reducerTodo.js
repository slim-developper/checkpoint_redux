import { ADD, DELETE, DONE,EDIT } from "../Constants/actionTypes";

const InitialState = {
  tasksList: [],
};

export const reducerTodo = (state = InitialState, action) => {
  switch (action.type) {
    case ADD:
      return { ...state, tasksList: [...state.tasksList, action.payload] };
    case DELETE:
      return {
        ...state,
        tasksList: state.tasksList.filter((item) => item.id !== action.payload),
      };

    case DONE:
      return {
        ...state,
        tasksList: state.tasksList.map((item) =>
          item.id === action.payload ? { ...item, isDone: !item.isDone } : item
        ),
      };

      case EDIT:
      return {
        ...state,
        tasksList: state.tasksList.map((item) =>
          item.id === action.payload.id ? { ...item, description: action.payload.description } : item
        ),
      };

    default:
      return state;
  }
};
