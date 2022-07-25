import './App.css';
import { Routes, Route } from "react-router-dom"
import Navbar from './Components/Navbar/Navbar'
import Homepage from './Components/Homepage/Homepage';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import Notes from './Components/Notes/notes';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Homepage/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
        <Route path='/notes' element={<Notes/>} ></Route>
      </Routes>
    </div>
  );
}

export default App;
