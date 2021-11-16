import React from 'react'
import { connect } from 'react-redux'

const Users = (users) => {
  console.log(users)
  return(
  <React.Fragment>
    <h1>holaaaaa</h1>
    {/* {
      users.map(u => (
        <h1>{u.name}</h1>
      ))
    } */}
    <style jsx>{`
      h1 {
        color: blue;
      }
      div {
        background: red;
      }
      @media (max-width: 600px) {
        div {
          background: blue;
        }
      }
    `}</style>
  </React.Fragment>
  )
}


const mapStateToProps = state =>({
  users: state
})

const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(Users)


