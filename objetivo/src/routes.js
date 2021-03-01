import React,{Fragment, useContext} from 'react'
import {Route,Redirect} from "react-router-dom"
import HomeView from './Views/HomeView'
import AdminView from './Views/AdminView'
import LoginView from './Views/LoginView'
import { AuthFireContext } from "./context/authFireContext";

export default function Routes(){
  const { userId } = useContext(AuthFireContext);

  return(
    <Fragment>
      <Route path="/" exact component={HomeView} />
      <Route path="/admin" exact component ={AdminView}/>
      <Route path="/login" exact component ={LoginView}/>
      <Route
        path="/"
        exact
        render={() => {
          if(userId == false){
            return <Redirect to='/'/>
          }
        }}
      />
    </Fragment>
  )
}