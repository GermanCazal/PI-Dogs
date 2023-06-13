import { ERROR, GET_USERS, GET_USERS_BY_NAME } from "../actions";

let initialSate = {
  allUsers: [],
  copyUser: [],
  message: "",
};

function rootReducer(state = initialSate, action) {
  switch (action.type) {
    case GET_USERS:
      return {
        ...state,
        allUsers: action.payload,
        copyUser: [...action.payload],
      };
    case GET_USERS_BY_NAME:
      return {
        ...state,
        allUsers: action.payload,
      };
    case ERROR:
      return {
        ...state,
        message: action.payload,
      };

    default:
      return state;
  }
}

export default rootReducer;
