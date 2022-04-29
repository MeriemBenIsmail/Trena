import React from 'react'
import { useUserContext } from "../contexts/userContext";
import { useNavigate } from "react-router-dom";
import { Hero } from '../components/home/Hero';
import { AboutUs } from '../components/home/AboutUs';
import { TerrainsSlider } from '../components/home/TerrainsSlider';
import { Coach } from '../components/home/Coach';
export const Home = () => {
  const { user, logoutUser } = useUserContext();
  const navigate = useNavigate();
  const handlelogin = () => {
    navigate('/login')
  }
  const handleSignup = () => {
    navigate('/signup')
  }
  return (

    
    <div>
      {/*<h1>Welcome to trena ! </h1>
      {user && <h2>{user.email}</h2>}
      
      {user && <button onClick={logoutUser}>Log out</button>}
      {!user && <button onClick={handlelogin}>Login</button>}
  {!user && <button onClick={handleSignup}>Sign Up</button>}*/}
  <Hero />
  <AboutUs />
  <TerrainsSlider />
  <Coach />
    </div>
  )
}
