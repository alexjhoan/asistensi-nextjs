import React from 'react'
import Prueba from '../components/prueba'

export default function Home() {
  return (
    <React.Fragment>
      <div className="container mx-auto px-4 grid grid-cols-2 gap-4">
        <div className="">
          <h1>col-1</h1>
        </div>
        <div className="">
          <h1>col-2</h1>
        </div>
      </div>
    </React.Fragment>
  )
}
