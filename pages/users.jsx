import React from 'react'
import Users from '../components/Users'
import store from '../redux/store'
import {initUsers} from '../redux/actions/getUsers'
import Background from '../components/Background'
import Nav from '../components/Nav'

const apiUrl = process.env.REACT_APP_API

export async function getStaticProps() {
	try {
		const response = await fetch(`${apiUrl}`,{method: "GET"})
		const data = await response.json()
		return {props: {data}}
	} catch (error) {
		console.log(error)
	}
}

function users({data}) {
  store.dispatch(initUsers(data))
  return (
    <React.Fragment>
      <Background />
      <Nav/>
      <div className='container items-center justify-center mx-auto my-4'>
        <h1>Lista de Usuarios desde API</h1>
        <Users />
      </div>
      <style jsx>{`
        h1 {
          color: white;
          text-align: center;
          font-size: 25px;
        }
      `}</style>
    </React.Fragment>
  )
}

export default users
