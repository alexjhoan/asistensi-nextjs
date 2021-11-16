import React from 'react'

export default function prueba() {
  return (
    <React.Fragment>
      <h1>holaaaaa</h1>
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
