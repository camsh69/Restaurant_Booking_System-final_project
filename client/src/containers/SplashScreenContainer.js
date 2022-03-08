import React from 'react';
import BannerImage from "../assets/splashScreen.jpg"
import "../Styles/Home.css"

const SplashScreenContainer = () => {
  return (
    <div className="home" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),url(${BannerImage})` }}>
    <div className= "headerContainer">
        <h1> BookiFy</h1>
        <h2>Super Mega Awesome Restaurant Table Booking App</h2>
    </div>
    </div>
  
  )
}

export default SplashScreenContainer
