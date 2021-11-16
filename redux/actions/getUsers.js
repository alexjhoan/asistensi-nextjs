export const GET_USERS = 'GET_USERS'

export function getUsers() {

  const users = [
    {
      id:1,
      name: 'alex'
    },
    {
      id:2,
      name: 'ana'
    },
    {
      id:3,
      name: 'jhoan'
    },
    {
      id:4,
      name: 'milagros'
    }
  ]

  return {
    type: GET_USERS,
    payload: users
  }
}
