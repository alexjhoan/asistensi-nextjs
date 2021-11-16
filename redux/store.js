import {createStore, combineReducers} from 'redux'
import {getUsers} from './reducers/getUsers'

const usersReducer = combineReducers({
  users: getUsers
})

export default createStore(usersReducer)
