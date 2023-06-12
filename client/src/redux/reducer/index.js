import { GET_USERS } from "../actions";

let initialSate = { allUsers: [], nombre: "german" };

function rootReducer(state = initialSate, action) {
  switch (action.type) {
    case GET_USERS:
      return {
        ...state,
        allUsers: action.payload,
      };

    default:
      return state;
  }
}

export default rootReducer;
