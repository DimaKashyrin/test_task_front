// import axios from 'axios';

import {
  getUsers
} from '../redux/actions/actionCreators';

// const instance = axios.create({
//   baseURL: 'http://localhost:5000',
//   headers:{
//   }
// })

const usersServer = () => async (dispatch) => {
  let response = await (await fetch('http://localhost:5000/users')).json();
  console.log(response);
  dispatch(getUsers(response))
}

export {usersServer}


// const getUsers = async () => {
//   return await fetch('http://localhost:5000/users').then(value => value.json());
// }