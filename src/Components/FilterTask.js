import { TOGGLE } from "../constants/actionsTypes";

const intialState = {
  show: false,
  
};

const reducerShow = (state = intialState, action) => {
  if (action.type === TOGGLE) {
    return { ...state, show: !state.show };
  } else {
    return state;
  }
};

export default reducerShow