import axios from "axios";
export const GET_USERS = "GET_USERS";

export function getUsers() {
  return async function (dispatch) {
    const response = await axios("https://api.thedogapi.com/v1/breeds");
    return dispatch({
      type: "GET_USERS",
      payload: response.data,
    });
  };
}
