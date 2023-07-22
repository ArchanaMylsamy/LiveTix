import React from 'react'
import './Event.css'
import './Seating';
import {Link} from 'react-router-dom';
function Event() {
  return (
    <div className='ticketbg'>
      <center><h1>BOOK YOUR TICKETS</h1></center>
      <center><h6>For Upcoming Events</h6></center>
      <div className="ticket ticket-1 ticket-animation">
  <div className="date">
    <span className="day">28</span>
    <span className="month-and-time">JULY<br /><span className="small">8PM</span></span>
  </div>

  <div className="artist">
    <span className="name">AR RAHMAN</span><br />
    <span className="live small">LIVE</span>
  </div>

  <div className="location">
    <span>RS PURAM CBE</span><br />
    <span className="small">TAMILNADU</span>
  </div>

  <div className="rip"></div>
  
  <div className="cta">
    <Link to="/Seating"><button className="buy" href="#">GRAB A TICKET</button></Link>
  </div>
</div>
<div className="ticket ticket-2 ticket-animation">
  <div className="date">
    <span className="day">06</span>
    <span className="month-and-time">AUG<br /><span className="small">7PM</span></span>
  </div>

  <div className="artist">
    <span className="name">SID SRIRAM</span><br />
    <span className="live small">LIVE</span>
  </div>

  <div className="location">
    <span>CODISSIA CBE,TN</span><br />
    <span className="small">TAMILNADU</span>
  </div>

  <div className="rip"></div>
  
  <div className="cta">
  <Link to="/Seating"> <button className="buy" href="#">GRAB A TICKET</button></Link>
  </div>
</div>
<div className="ticket ticket-3 ticket-animation">
  <div className="date">
    <span className="day">19</span>
    <span className="month-and-time">JULY<br /><span className="small">6PM</span></span>
  </div>

  <div className="artist">
    <span className="name">SHREYA GHOSAL</span><br />
    <span className="live small">LIVE</span>
  </div>

  <div className="location">
    <span>CHENNAI CENTRAL</span><br />
    <span className="small">TAMILNADU</span>
  </div>

  <div className="rip"></div>
  
  <div className="cta">
  <Link to="/Seating"> <button className="buy" href="#">GRAB A TICKET</button></Link>
  </div>
</div>
<div className="ticket ticket-4 ticket-animation">
  <div className="date">
    <span className="day">15</span>
    <span className="month-and-time">AUG<br /><span className="small">6PM</span></span>
  </div>

  <div className="artist">
    <span className="name">SINGER ANDREA</span><br />
    <span className="live small">LIVE</span>
  </div>

  <div className="location">
    <span>BANGALORE</span><br />
    <span className="small">TAMILNADU</span>
  </div>

  <div className="rip"></div>
  
  <div className="cta">
  <Link to="/Seating"> <button className="buy" href="#">GRAB A TICKET</button></Link>
  </div>
</div>
<div className="ticket ticket-5 ticket-animation">
  <div className="date">
    <span className="day">08</span>
    <span className="month-and-time">SEP<br /><span className="small">7PM</span></span>
  </div>

  <div className="artist">
    <span className="name">YUVAN SHANKAR RAJA</span><br />
    <span className="live small">LIVE</span>
  </div>

  <div className="location">
    <span>RS PURAM CBE</span><br />
    <span className="small">TAMILNADU</span>
  </div>

  <div className="rip"></div>
  
  <div className="cta">
  <Link to="/Seating">   <button className="buy" href="#">GRAB A TICKET</button></Link>
  </div>
</div>
<div className="ticket ticket-6 ticket-animation">
  <div className="date">
    <span className="day">12</span>
    <span className="month-and-time">DEC<br /><span className="small">8PM</span></span>
  </div>

  <div className="artist">
    <span className="name">PRADEEP KUMAR</span><br />
    <span className="live small">LIVE</span>
  </div>

  <div className="location">
    <span>CHENNAI CENTRAL</span><br />
    <span className="small">COIMBATORE</span>
  </div>

  <div className="rip"></div>
  
  <div className="cta">
  <Link to="/Seating"> <button className="buy" href="#">GRAB A TICKET</button></Link>
  </div>
</div>

    </div>
  )
}

export default Event
