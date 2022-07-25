import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { LoginContext } from '../Context/Context';



const Navbar = () => {
    let navigate = useNavigate()
    const {user,setUser} = React.useContext(LoginContext)
    async function handleLogout(){
      setUser(null);
      localStorage.removeItem("token");
      navigate("/login")
    }
  return (

    <div style={{display:'flex' , justifyContent:"space-around",padding:"10px"}}>
        <Link to="/">Homepage</Link>
      {
        user ? <Link className='linkTag' to='/notes'>Notes</Link> : null
      }
        {
       user? <button onClick={handleLogout}>Logout</button>
        :<Link to="/login">Login</Link> 
}
    </div>
  )
}

export default Navbar