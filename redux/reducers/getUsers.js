import {INIT_ALL_USERS} from '../actions/getUsers'

const initialState = {
  list: []
}

export const getAllUsers = (state = initialState, action) => {
  console.log(action)
  switch (action.type) {
    case INIT_ALL_USERS:
      return action.payload
    default:
      return state;
  }
}




