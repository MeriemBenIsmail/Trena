import React from 'react'
import { Navbar } from '../components/shared/Navbar'
import Steps from '../components/coach/Steps'
import Catalogue from '../components/coach/Catalogue'
import { useUserContext } from '../contexts/userContext'
export const Coach = () => {
  const { user, logoutUser } = useUserContext();
  return (
    <div>
        
        <Steps user={user} logout={logoutUser} />
        <Catalogue />
    </div>
  )
}
