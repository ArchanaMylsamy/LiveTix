import React from 'react';
import './App.css';
import Login from './Login';
import Signin from './Signin';
import Homepage from './Homepage';
import Logo from './Logo';
import{BrowserRouter as Router,Route,Routes} from 'react-router-dom';
function App() {
  return (
     <Router>
    <Routes>
    <Route path="/" element={<Logo/>}/>
    <Route path="/Homepage" element={<Homepage/>}/>
    <Route path="/Login" element={<Login/>}/>
    <Route path="/Signin" element={<Signin/>}/>
    </Routes>
     </Router>
      
    
  );
}

export default App;
