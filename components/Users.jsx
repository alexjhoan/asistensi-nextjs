import React from 'react'
import { connect } from 'react-redux'


const Users = ({users}) => {
  return(
  <React.Fragment>
    <div className='container items-center justify-center mx-auto my-4'>
      {
        users.map(u => (
          <div key={u.id}>
            <h1>{u.name}</h1>
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
