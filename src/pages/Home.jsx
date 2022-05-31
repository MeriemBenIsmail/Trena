import React from 'react'
import { useUserContext } from "../contexts/userContext";
import { useNavigate } from "react-router-dom";
<<<<<<< HEAD
//import { Navbar } from 'react-bootstrap';
import Navbar from '../components/auth/Navbar/Navbar';

=======
>>>>>>> 17d050febb9f67552c8f484241f496184657d03a
import { Hero } from '../components/home/Hero';
import { AboutUs } from '../components/home/AboutUs';
import { TerrainsSlider } from '../components/home/TerrainsSlider';
import { Coach } from '../components/home/Coach';
import Footer from '../components/shared/Footer';

export const Home = () => {
  const { user, logoutUser } = useUserContext();
  const navigate = useNavigate();
  const handlelogin = () => {
    navigate('/login')
  }
  const handleSignup = () => {
    navigate('/signup')
  }
  //console.log(user)
  return (

    
    <div>

<<<<<<< HEAD
=======
     
>>>>>>> 17d050febb9f67552c8f484241f496184657d03a
  <Hero user={user} logout={logoutUser} />
  <AboutUs />
  <TerrainsSlider />
  <Coach />
  <Footer />

    </div>
  )
}
