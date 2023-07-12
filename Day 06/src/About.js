import React from 'react'
import './About.css';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward'; 
function About() {
  return (
    <div>
    <div className="aboutpage">
      <div>
      <h1>CREATE<br>
      </br>& DELIVER</h1>
      <h2>Real experience</h2>
      <button>Read More</button>
      </div>
      <div><img className="phonesee"src="https://images.pexels.com/photos/826349/pexels-photo-826349.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" height="400px" width="400px"></img></div>
    </div>
    <div className="aboutpage2">
      <div><img className="image01"src="https://images.pexels.com/photos/2418338/pexels-photo-2418338.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"></img></div>
      <div>
        <h1>01</h1>
        <br></br>
        <h2>EXPLORE YOUR <br></br>PREFERENCES</h2><br></br>
        <h5>Choose your events based on your location <br></br>date,time and venue.</h5>
      </div>
    </div>
    <div className="aboutpage3">
      <div>
        <h1>02</h1>
        <h2>CHECK THE<br></br>AVAILABILITY</h2>
        <h5>Book your seats based on your event preferences <br></br>and availability.</h5>
      </div>
      <div>
        <img className="image02"src="https://images.pexels.com/photos/7081161/pexels-photo-7081161.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"></img>
      </div>
    </div>
    <div className="aboutpage4">
      <div><img className="image03"src="https://th.bing.com/th/id/OIP.aQIxkwjIIFWIKAe-WzPKbAHaE5?pid=ImgDet&rs=1"></img></div>
      <div>
        <h1>03</h1>
        <br></br>
        <h2>USER FRIENDLY DESIGN</h2><br></br>
        <h5>After booking your seats make payments and enjoy your live concerts.</h5>
      </div>
    </div>
    <div className="aboutpage5">
      <div>
        <h1>GET THE APP</h1>
       </div> 
       <a href="https://play.google.com/store/apps/details?id=your_app_id" class="play-store-button">
  <span>Download on Play Store</span><br></br>
       <LocalGroceryStoreIcon sx={{ fontSize: 25,color:"white" }}className='person'> </LocalGroceryStoreIcon>
</a>
    </div>
    </div>
  )
}

export default About
