import React from 'react'
import { Link} from 'react-router-dom'
import "./register.css"

const Register = () => {
      // const navigate = useNavigate()
      const [email, setEmail] = React.useState("")
      const [password, setPassword] = React.useState("")
      const [name, setName] = React.useState("")
      const [number, setNumber] = React.useState("")
      const handleRegister = async (e) => {
            e.preventDefault();
            let data = {
                  email,
                  password,
                  name,
                  image: "https://www.pngitem.com/pimgs/m/421-4212617_person-placeholder-image-t…"
            }
            console.log(data)
            let response = await fetch("http://localhost:8080/createUser", {
                  method: "POST",
                  body: JSON.stringify(data),
                  headers: {
                        'Content-Type': "application/json"
                  },
            })
            const res = await response.json();
            return res;
            

      }
      return (
            <div>
                  <h3>Register</h3>
                  <form className="formContainer" onSubmit={handleRegister}>
                        <label>Name:
                              <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)}></input>
                        </label>
                        <label>Email:
                              <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)}></input>
                        </label>
                        <label>Mobile:
                              <input type="number" name="number" value={number} onChange={(e) => setNumber(e.target.value)}></input>
                        </label>
                        <label>Password:
                              <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)}></input>
                        </label>
                        <Link to="/login">Alredy have an account</Link>
                        <input className='submitBtn' type="submit" value="Register"></input>

                  </form>
            </div>
      )
}

export default Register