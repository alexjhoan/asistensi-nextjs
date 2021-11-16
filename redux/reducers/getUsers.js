import {INIT_ALL_USERS} from '../actions/getUsers'

const initialState = {
  list: []
}

export const getAllUsers = (state = initialState, action) => {
  switch (action.type) {
    case INIT_ALL_USERS:
      return action.payload;
    case 'REMOVE_USER':
      return state.filter((post)=>post.id !== action.id);
    default:
      return state;
  }
}




