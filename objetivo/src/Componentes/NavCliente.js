import React,{Fragment} from 'react'
import {Link} from 'react-router-dom'

export default function NavCliente() {
  return (
    <Fragment>
      <Link className="nav-link text-dark" to='/'>Home</Link>     
      <Link className="nav-link text-dark" to='/login'>Login</Link>
    </Fragment>
  )
}