import axios from "axios";

export const GET_USERS = "GET_USERS";
export const GET_USERS_BY_NAME = "GET_USERS_BY_NAME";
export const ERROR = "ERROR";
export const CLEAN_MESSAGE = "CLEAN_MESSAGE";

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

export function clearMessage() {
  return function (dispatch) {
    return dispatch({
      type: "CLEAN_MESSAGE",
    });
  };
}
