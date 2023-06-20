import {
  CLEAN_MESSAGE,
  ERROR,
  FILTERS,
  GET_USERS,
  GET_USERS_BY_NAME,
  GET_TEMPERAMENT,
} from "../actions";

let initialState = {
  allUsers: [],
  copyUsers: [],
  message: "",
  dogsFiltered: [],
  filters: false,
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_USERS:
      return {
        ...state,
        allUsers: action.payload, // [usuarios]
        copyUsers: [...action.payload], // copiar con el spread para que sea un array nuevo y se quede la refencia
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
    // case GET_DOG_DETAIL:
    //   return {
    //     ...state,
    //     dogsDetail: action.payload,
    //   };

    case CLEAN_MESSAGE:
      return {
        ...state,
        message: "",
      };

    case FILTERS:
      if (action.payload === "asc") {
        return {
          ...state,
          filters: true,
          dogsFiltered: [...state.allUsers].sort((prev, next) => {
            if (prev.name > next.name) return 1;
            if (prev.name < next.name) return -1;
            return 0;
          }),
        };
      } else if (action.payload === "dct") {
        return {
          ...state,
          filters: true,
          dogsFiltered: [...state.allUsers].sort((prev, next) => {
            if (prev.name > next.name) return -1;
            if (prev.name < next.name) return 1;
            return 0;
          }),
        };
      }
    case GET_TEMPERAMENT:
      return {
        ...state,
        temperaments: action.payload,
      };

    default:
      return state;
  }
}

export default rootReducer;
