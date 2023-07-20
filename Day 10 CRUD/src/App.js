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
import Event from './Event';
import Payment from './Payment';
import Seating from './Seating';
import Ticket from './Ticket';
import Discover from './Discover';
import Add from './Add';
import Update from './Update';
import Get from './Get';
import Delete from './Delete';

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
    <Route path="/Event" element={<Event/>}/>
    <Route path="/Seating" element={<Seating/>}/>
    <Route path="/Payment" element={<Payment/>}/>
    <Route path="/Ticket" element={<Ticket/>}/>
    <Route path="/Discover" element={<Discover/>}/>
    <Route path="/Add" element={<Add/>}/>
    <Route path="/Update" element={<Update/>}/>
    <Route path="/Get" element={<Get/>}/>
    <Route path="/Delete" element={<Delete/>}/>






    </Routes>
     </Router>
      
    
  );
}

export default App;
