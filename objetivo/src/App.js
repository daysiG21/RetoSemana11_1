import React from 'react'
import Routes from './routes'
import {Switch, BrowserRouter as Router} from 'react-router-dom'
import NavBar from './Componentes/NavBar'
import AuthContextProvider from "./context/authFireContext";


export default function App(){
  return(
    <Router>
       <AuthContextProvider>
       <NavBar/>
      <div className="container">
        <Switch>
          <Routes/>
        </Switch>
      </div>
       </AuthContextProvider>      
    </Router>
  )
}