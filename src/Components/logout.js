import React from 'react';
import {Link} from 'react-router-dom';

const Logout=()=>{

    return(
        <div>
            <h1>
                You are successfully logged out!!!
            </h1>
            <Link to="/">Login Again</Link>
            
        </div>
    )                                         
};
export default Logout;