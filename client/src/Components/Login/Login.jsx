import React from 'react'
import { Link,useNavigate } from 'react-router-dom'
import { LoginContext } from '../Context/Context';
import "./login.css";



const Login = () => {
  const {setUser} = React.useContext(LoginContext)
  let navigate=useNavigate();
    const [email,setEmail]=React.useState("")
    const [password,setPassword]=React.useState("")

    const handleSubmit =async(e)=>{
      try {
        e.preventDefault();
        let loginData = {
          email,
          password
        }
        let response = await fetch(`http://localhost:8080/login`, {
          method: "POST",
          body: JSON.stringify(loginData),
          headers: {
            'Content-Type': "application/json"
          }
        })
        let res = await response.json();
        const token = res.token;
        if(token === undefined){
          alert("Please Register First");
          navigate("/register")
          return
        }
        alert("login Success");
        localStorage.setItem("token", token);
        setUser(token);
        navigate("/")


      } catch (error) {
        console.log(error)
      }
        
    }
  return (
    <div>
      <h3>Login</h3>
        <form className='formContainer' onSubmit={handleSubmit}>
            <label>
                Email:
                <input type="email" name='email' value={email} onChange={(e)=>setEmail(e.target.value)}></input>
            </label>
            <label>
                Password:
                  <input type="password" name='password' value={password} onChange={(e) => setPassword(e.target.value)}></input>
            </label>
            <Link to="/register">Create Account</Link>
            <input className='submitBtn' type="submit" value="Login"></input>
        </form>
    </div>
  )
}

export default Login