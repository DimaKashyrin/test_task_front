import { ADD_USER, LOAD_USER } from "./actions";

const getUsers = (payload) => {
  return { type: LOAD_USER, payload }
}
const addUser = (payload) => {
  return { type: ADD_USER, payload }
}

export { getUsers, addUser }