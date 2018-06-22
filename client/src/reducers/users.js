import axios from 'axios';
import { setHeaders } from './headers';

const USERS = 'USERS';

export const getUsers = () => {
  return (dispatch) => {
    axios.get('/api/users')
      .then( res => {
        dispatch({ type: USERS, users: res.data })
        const { headers } = res;
        dispatch(setHeaders(headers));
      })
  }
}

export default (state = [], action) => {
  switch(action.type) {
    case 'USERS':
      return action.users
    default:
      return state;
  }
};