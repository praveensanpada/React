import React from 'react';
import {Link} from 'react-router-dom';


const Home=()=>{

    const authd=()=>{
        localStorage.removeItem('token');
    }
    return(
       
        <div className='container'>
        <h1>
            Welcome to home page!!!!
        </h1>
        <a href="/"><button onClick={authd}>Logout</button></a>
    </div>
    )
};
export default Home;

