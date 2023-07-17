import React from 'react';
import './About.css';
import 'animate.css';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';

function About() {
  const handleReadMoreClick = () => {
    const targetSection = document.getElementById('target-section');
    targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div>
      <div className="aboutpage">
        <div>
          <h1 className="animate__animated animate__fadeInUp">CREATE<br />& DELIVER</h1>
          <h2 className="animate__animated animate__fadeInUp">Real experience</h2>
          <button onClick={handleReadMoreClick} className="animate__animated animate__fadeInUp">Read More</button>
        </div>
        <div>
          <img
            className="phonesee"
            src="https://images.pexels.com/photos/826349/pexels-photo-826349.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            height="400px"
            width="400px"
            alt=""
          />
        </div>
      </div>
      <div className="aboutpage2" id="target-section">
        <div>
          <img
            className="image01 animate__animated animate__fadeInLeft"
            src="https://images.pexels.com/photos/2418338/pexels-photo-2418338.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
        </div>
        <div>
          <h1 className="animate__animated animate__fadeInUp">01</h1>
          <br></br>
          <h2 className="animate__animated animate__fadeInUp">EXPLORE YOUR <br></br>PREFERENCES</h2>
          <br></br>
          <h5 className="animate__animated animate__fadeInUp">
            Choose your events based on your location <br></br>date, time, and venue.
          </h5>
        </div>
      </div>
      <div className="aboutpage3">
        <div>
          <h1 className="animate__animated animate__fadeInUp">02</h1>
          <h2 className="animate__animated animate__fadeInUp">CHECK THE<br></br>AVAILABILITY</h2>
          <h5 className="animate__animated animate__fadeInUp">
            Book your seats based on your event preferences <br></br>and availability.
          </h5>
        </div>
        <div>
          <img
            className="image02 animate__animated animate__fadeInRight"
            src="https://images.pexels.com/photos/7081161/pexels-photo-7081161.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
        </div>
      </div>
      <div className="aboutpage4">
        <div>
          <img
            className="image03 animate__animated animate__fadeInLeft"
            src="https://th.bing.com/th/id/OIP.aQIxkwjIIFWIKAe-WzPKbAHaE5?pid=ImgDet&rs=1"
            alt=""
          />
        </div>
        <div>
          <h1 className="animate__animated animate__fadeInUp">03</h1>
          <br></br>
          <h2 className="animate__animated animate__fadeInUp">USER FRIENDLY DESIGN</h2>
          <br></br>
          <h5 className="animate__animated animate__fadeInUp">
            After booking your seats, make payments and enjoy your live concerts.
          </h5>
        </div>
      </div>
      <div className="aboutpage5">
        <div>
          <h1>GET THE APP</h1>
        </div>
        <a href="https://play.google.com/store/apps/details?id=your_app_id" className="play-store-button">
          <span>Download on Play Store</span>
          <br></br>
          <LocalGroceryStoreIcon sx={{ fontSize: 25, color: 'white' }} className="person" />
        </a>
      </div>
    </div>
  );
}

export default About;
