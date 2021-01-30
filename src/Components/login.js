import React, {useState} from 'react';
import Axios from 'axios';
import { useHistory } from "react-router-dom";


    function Login(){


      const history = useHistory();

      /*const routeChange = () =>{ 
       // let path = `\home`; 
        history.push('/home');
      }*/
   
    const[usernameReg,setUsernameReg]=useState("");
    const[passwordReg,setPasswordReg]=useState("");
  
    const[username,setUsername]=useState("");
    const[password,setPassword]=useState("");
  
    const[loginStatus,setLoginStatus]=useState("");
  
    const register=()=>{
      Axios.post("http://localhost:3001/register",{username: usernameReg , password: passwordReg}).then((response)=>{
      console.log(response);
    }).catch((err)=>{
      console.log(err)
  
    });
    };
  
    const login=()=>{
      Axios.post("http://localhost:3001/login",
      {username: username , 
      password: password}).then((response)=>{

        
  
        if(response.data.message){
           setLoginStatus(response.data.message);
          
        }
        else{
            console.log(response.data)
            localStorage.setItem('token',response.data.token);
            history.push('/home');
            //routeChange();
            //useNavigate("/home");
        }


    
    }).catch((err)=>{
      console.log(err)
  
    });
    };
   
    return (
      <div className="App">
         <div className="registration">
        
           <h1>Registration</h1>
           <label>Username</label>
           <input type="text" onChange={(e)=>{
             setUsernameReg(e.target.value);
           }}>
  
           </input>
           <label>password</label>
           <input type="text"onChange={(e)=>{
             setPasswordReg(e.target.value);
           }}></input><br/>
             <button type="button" onClick={register}>register</button>
           
         </div><br/><hr/>
         <div>
           <h1>Login</h1>
           <input type="text" placeholder="Username..." onChange={(e)=>{
             setUsername(e.target.value);}}></input><br/><br/>
           <input type="password" placeholder="password..." onChange={(e)=>{
             setPassword(e.target.value);}}></input><br/><br/>
           <button type="button" onClick={login}>login</button>
         </div>
       <h1>{loginStatus}</h1>
      </div>
    
    );

   
           
}

export default Login;
