import {
  ADD_USER,
  LOAD_USER
} from "../actions/actions";

let initialState = {
  users: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_USER:
      console.log(action.type);
      return {...state.users, users: [...action.payload]};
    case ADD_USER:
      let newUser = action.payload;
      let newUserArray = [...state.users, newUser];
      return {...state, users: [...newUserArray]};
    default:
      return state;
  }
}

export { reducer };