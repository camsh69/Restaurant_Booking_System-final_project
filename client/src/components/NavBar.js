import React from 'react';
import { Link } from "react-router-dom";
import Logo from "../assets/logo.png"
import "../Styles/Navbar.css";


const NavBar = () => {

   
    
  return (
    
    <div className='navbar'>
            <img src={Logo} />
            <div className= "hiddenLinks">        
                <Link to="/">Home</Link>
                <Link to="/view">View Bookings</Link>
                <Link to="/add">Add Booking</Link>
                <Link to="/edit">Edit Booking</Link>
                <Link to="/clients">Clients</Link>
            </div>
     </div>
    
    



  )
}

export default NavBar;