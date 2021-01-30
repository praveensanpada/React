import React from "react";
import {Switch,Route, Redirect, Router, withRouter} from 'react-router-dom'
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import "../src/App.css"
import Login from './Components/login'
import Home from './Components/home'
import Logout from './Components/logout'
import Aboutus from './Components/aboutus'
import Contact from './Components/contact'
import Navbar from './Components/navbar' 


const xauth= localStorage.getItem('token');


//const xauth=true
console.log(xauth)

const namepath=window.location.pathname

const App=()=>{

    return(

<div className='App'>
           
    <Switch>
          { xauth !== null && xauth !== undefined && xauth !== ''?
          <>
            <Navbar />
            <Route path="/home" component={Home}/>
            <Route path="/aboutus" component={Aboutus}/>
            <Route path="/contact" component={Contact}/>
            
          </>
            :
          <>
            <Route exact path="/" component={Login}/>
            <Route path="/logout" component={Logout}/> 
          </>
          }            
    </Switch>

</div>
              
    )
  }  


export default App;
