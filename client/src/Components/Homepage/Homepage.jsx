import React from 'react'
import { useContext } from 'react'
import { LoginContext } from '../Context/Context'


const Homepage = () => {
  const {user} = useContext(LoginContext)
  return (
    <div>
       {
        user?"User Logged in":"Please Login"
       }
    </div>
  )
}

export default Homepage
