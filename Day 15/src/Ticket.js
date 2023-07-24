import React from 'react'
import img1 from './Images/1.jpg';
import img2 from './Images/2.jpg';
import img3 from './Images/3.jpg';
import img4 from './Images/4.jpg';
import './Ticket.css'
function Ticket() {
  return (
    <div className='ticketbg1234'>
      <div><br></br>
        <h1 className='headtick'>YOUR TICKETS</h1><br></br><br></br>
        <img className="imagetickets"src={img1} height="500px" width="1700px"></img><br></br><br></br>
        <img className="imagetickets"src={img2} height="500px" width="1700px"></img><br></br><br></br>
        <img className="imagetickets"src={img3} height="500px" width="1700px"></img><br></br><br></br>
        <img className="imagetickets"src={img4} height="500px" width="1700px"></img><br></br>
      </div>
    </div>
  )
}

export default Ticket
