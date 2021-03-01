import React,{Fragment} from 'react'
import {Link} from 'react-router-dom'

export default function NavAdmin({salir}) {
  return (
    <Fragment>   
      <Link className="nav-link text-dark" to='/'>Home</Link> 
      <Link className="nav-link text-dark" to='/admin'>Admin</Link>     
      <span 
        className="nav-link text-dark" style={{cursor:'pointer'}}
        onClick={()=>{salir()}}>
        Salir
      </span>
    </Fragment>
  )
}
