export const INIT_ALL_USERS = 'INIT_ALL_USERS'

export const initUsers = users => {
  return{
    type: INIT_ALL_USERS,
    payload: users
  }
}

