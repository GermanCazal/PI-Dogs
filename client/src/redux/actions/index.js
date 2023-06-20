import axios from "axios";

export const GET_TEMPERAMENT = "GET_TEMPERAMENTS";
export const GET_USERS = "GET_USERS";
export const GET_USERS_BY_NAME = "GET_USERS_BY_NAME";
export const ERROR = "ERROR";
export const CLEAN_MESSAGE = "CLEAN_MESSAGE";
export const FILTERS = "FILTER";
// export const GET_DOG_DETAIL = "GET_DOG_DETAIL";

export function getUsers() {
  return async function (dispatch) {
    try {
      const response = await axios("http://localhost:3001/dogs");
      return dispatch({
        type: "GET_USERS",
        payload: response.data,
      });
    } catch (error) {}
  };
}

export function getUsersByName(name) {
  return async function (dispatch) {
    try {
      const response = await axios(`http://localhost:3001/dogs/?name=${name}`);
      return dispatch({
        type: "GET_USERS_BY_NAME",
        payload: response.data,
      });
    } catch (error) {
      return dispatch({
        type: "ERROR",
        payload: error.response.data.error,
      });
    }
  };
}

export function getTemperaments() {
  return async function (dispatch) {
    try {
      var res = await axios.get("/temperament");
      return dispatch({
        type: GET_TEMPERAMENT,
        payload: res.data,
      });
    } catch (error) {
      alert(error);
    }
  };
}

// export const getDogDetail = (id) => {
//   return function (dispatch) {
//     axios(`http://localhost:3001/dogs/${id}`)
//       .then((response) => response.data)
//       .then((data) => dispatch({ type: GET_DOG_DETAIL, payload: data }));
//   };
// };

export function clearMessage() {
  return function (dispatch) {
    return dispatch({
      type: "CLEAN_MESSAGE",
    });
  };
}

export function filter(orden) {
  return function (dispatch) {
    return dispatch({
      type: FILTERS,
      payload: orden,
    });
  };
}
