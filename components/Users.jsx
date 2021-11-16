import React from 'react'
import { connect } from 'react-redux'
import { useDispatch } from 'react-redux'


const Users = ({users}) => {
  const dispatch = useDispatch()
  return(
  <React.Fragment>
    <div className='container items-center justify-center mx-auto my-4 mb-96 md:mb-0'>
      {
        users.map(u => (
          <div key={u.id} className='grid grid-cols-1 md:grid-cols-2 gap-1 mb-5 justify-center'>
            <h1>{u.name}</h1>
            <button className="bg-gray-200 bg-opacity-25 border-2 border-white border-opacity-100 text-white px-4 py-2 rounded-3xl transition-colors duration-500 ease-in-out hover:bg-white hover:text-purple-700 w-60 mx-auto" onClick={()=>dispatch({type:'REMOVE_USER',id:u.id})}>eliminar</button>
          </div>
        ))
      }
    </div>
    <style jsx>{`
      h1 {
        color: white;
        text-align: center;
        font-size: 18px;
      }
    `}</style>
  </React.Fragment>
  )
}

const mapStateToProps = state =>({
  users: state.users
})

const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(Users)
