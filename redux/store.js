import {createStore, combineReducers} from 'redux'
import {getAllUsers} from './reducers/getUsers'

const usersReducer = combineReducers({
  users: getAllUsers
})

export default createStore(usersReducer)
