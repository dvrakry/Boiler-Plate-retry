import Axios from "axios";
import { LOGIN_USER } from "./types";

export function loginUser(dataToSubmit) {
  const request = Axios.post("/api/users/login", dataToSubmit).then(
    (response) => response.data
  );

  //reducer에 넘겨주기
  return {
    type: LOGIN_USER,
    payload: request,
  };
}
