import React from 'react';
import './App.css';
// import Login from './Login';
// import Signin from './Signin';
import Homepage from './Homepage';

import{BrowserRouter as Router,Route,Routes} from 'react-router-dom';
function App() {
  return (
    // <Router>
    // <Routes>
    // <Route path="/" element={<Login/>}/>
    // <Route path="/Signin" element={<Signin/>}/>
    // </Routes>
    // </Router>
      
     <div>
      <Homepage/>
    </div> 
  );
}

export default App;
