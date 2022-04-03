import React from 'react'
import { useUserContext } from "../contexts/userContext";
import { Popup } from '../UI/popup/Popup';
export const Home = () => {
  const { user, logoutUser } = useUserContext();
  return (
    <div>
      <h1>Dashboard </h1>
      <h2>Email : {user.email}</h2>
      <button onClick={logoutUser}>Log out</button>
   
    </div>
  )
}
