import React from 'react';
import './App.css';
import Login from './Login';
import Signin from './Signin';
import Homepage from './Homepage';
import Logo from './Logo';
import Calendar from './Calendar';
import About from './About';
import Contact from './Contact';
import Profile from './Profile';
import Feedback from './Feedback';
import ConcertBlog from './ConcertBlog';
import LocationMap from './LocationMap';
import  View  from './View';
import{BrowserRouter as Router,Route,Routes} from 'react-router-dom';
function App() {
  return (
     <Router>
    <Routes>
    <Route path="/" element={<Logo/>}/>
    <Route path="/Homepage" element={<Homepage/>}/>
    <Route path="/Login" element={<Login/>}/>
    <Route path="/Signin" element={<Signin/>}/>
    <Route path="/Calendar" element={<Calendar/>}/>
    <Route path="/About" element={<About/>}/>
    <Route path="/Contact" element={<Contact/>}/>
    <Route path="/Feedback" element={<Feedback/>}/>
    <Route path="/Profile" element={<Profile/>}/>
    <Route path="/ConcertBlog" element={<ConcertBlog/>}/>
    <Route path="/LocationMap" element={<LocationMap/>}/>
    <Route path="/View" element={<View/>}/>

    </Routes>
     </Router>
      
    
  );
}

export default App;
