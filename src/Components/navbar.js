import React from 'react';
import {Link,NavLink} from 'react-router-dom';
const Navbar=()=>{
    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container">
        <div className="container-fluid">
           <a className="navbar-brand" href="#">React User</a>
           <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
             <span className="navbar-toggler-icon"></span>
           </button>
           <div className="collapse navbar-collapse" id="navbarNavDropdown">
             <ul className="navbar-nav">
               <li className="nav-item">
                 <NavLink className="nav-link" aria-current="page" to="/home">Home</NavLink>
               </li>
               <li className="nav-item">
                 <NavLink className="nav-link" to="/aboutus">Aboutus</NavLink>
               </li>
               <li className="nav-item">
                 <NavLink className="nav-link" to="/contact">Contact</NavLink>
               </li>
              
                 </ul>
            
           </div>
         </div>
        </div>
        
       </nav>
    )

}
export default Navbar;