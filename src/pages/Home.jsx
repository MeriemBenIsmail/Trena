import React from 'react'
import { useUserContext } from "../contexts/userContext";
import { Popup } from '../UI/popup/Popup';
import { useNavigate } from "react-router-dom";
//import { Navbar } from 'react-bootstrap';
import Navbar from '../components/auth/Navbar/Navbar';
import Footer from '../components/auth/Footer/Footer';
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
      <Navbar /> 
      <h1>Welcome to trena ! </h1>
      {user && <h2>{user.email}</h2>}
      
      {user && <button onClick={logoutUser}>Log out</button>}
      {!user && <button onClick={handlelogin}>Login</button>}
      {!user && <button onClick={handleSignup}>Sign Up</button>}
      <Footer />
    </div>
  )
}
