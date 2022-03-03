import React from 'react';
import { Link } from "react-router-dom";


const NavBar = () => {
  return (
    
    <ul>
        <li>
            <Link to="/">Home</Link>
        </li>
        <li>
            <Link to="/view">View Bookings</Link>
        </li>
        <li>
            <Link to="/add">Add Booking</Link>
        </li>
        <li>
            <Link to="/edit">Edit Booking</Link>
        </li>
        <li>
            <Link to="/clients">Clients</Link>
        </li>
    </ul>
  )
}

export default NavBar