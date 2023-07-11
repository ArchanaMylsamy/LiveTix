import React from 'react'
import './Homepage.css';
import CallMadeIcon from '@mui/icons-material/CallMade';

function Homepage() {
  return (
    <div>
    <header class="header">
    <img className="logo" src="https://thumbs.dreamstime.com/b/vector-illustration-singing-woman-karaoke-party-copy-space-75761308.jpg"></img>
    
<nav class="nav-items">
  
    <a href="#">Home</a>
    <a href="#">About</a>
    <a href="#">Event</a>
    <a href="#">Blogs</a>
    <a href="#">Contact</a>
    
</nav>

<nav class="nav">
    <button className='loginbutton'>Log In</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <button className='signupbutton'>SignUp<img className="upward"src={CallMadeIcon}></img></button>
</nav>
  </header>
  <main>
    <div class="intro">
    <p>All the fun starts here!</p>
      <h1>LIVETIX</h1>
      <p>"From Screen to Stage,All in One Place"</p>
      <button>View More </button>
    </div>
   <div className='quality'>
    <p>OUR QUALITY<img src="https://th.bing.com/th/id/OIP.0ERq-weaaWc6V0HME6NCTwHaHa?pid=ImgDet&w=800&h=800&rs=1" height="32px"width="40%"></img></p>
   </div>
    <div class="achievements">
      <div class="work">
        <i class="fas fa-atom"></i>
        <p class="work-heading">Easy Access To Information</p>
        <p class="work-text">Our website provides a centralized location for users to find information about concerts in their area.</p>
      </div>
      <div class="work">
        <i class="fas fa-skiing"></i>
        <p class="work-heading">Personalized Recommendations</p>
        <p class="work-text">Depending on the featured of your website,users may be able to receive personalized recommendations.</p>
      </div>
      <div class="work">
        <i class="fas fa-ethernet"></i>
        <p class="work-heading">Easy For Ticket Purchasing</p>
        <p class="work-text">I your website allows users to purchase tickets directly this can streamline the process for users.</p>
      </div>
    </div>
    
    <div class="about-me">
      <div class="about-me-text">
        <h2>About Me</h2>
        <p></p>
      </div>
      <img src="https://images.pexels.com/photos/625644/pexels-photo-625644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="me"></img>
    </div>
  </main>
  <div class="footer">
    <div class="copy">LIVETIX&nbsp;&nbsp;&nbsp;@2023</div>
    <div>"From Screen to Stage,All in One Place"</div>
    <div class="bottom-links">
      <div class="links">
        <span>More Info</span>
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Event</a>
        <a href="#">Blogs</a>
      </div>
      <div class="links">
        <span>FAQ Careers</span>
        <a href="#">Our Approach</a>
        <a href="#">Contact</a>
      </div>
      <div class="links">
        <a href="#"><img src="https://th.bing.com/th/id/R.1d41d1f32177a1bc5ead6ab2867e2e67?rik=o8s29wXrd9SHwA&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fpng-location-location-black-png-image-4231-1200.png&ehk=kIO1Jynemn%2bb1PmR%2fJgUS4uH4WnLJHrz5SbkNYKmGWA%3d&risl=&pid=ImgRaw&r=0" height="20px" width="20px"></img>SKCET,Coimbatore 641008</a>
        <a href="#"><img src="https://th.bing.com/th/id/R.45330ae12e30ad2fa29edb96b7d7f166?rik=cfOTYWf4t4oI6g&riu=http%3a%2f%2fwww.transparentpng.com%2fthumb%2ftelephone%2fmobile-phone-icon-windows-png-23.png&ehk=uFgk0rX16%2fW7DI8hR4ySlmMwHlQl5e612qU%2fWDZqmJs%3d&risl=&pid=ImgRaw&r=0" height="20px" width="20px"></img>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;9342524855</a>
        <a href="#"><img src="https://th.bing.com/th/id/R.9979b71ae9d2da56a442da0fb960f2a8?rik=3uFxJExZj4ykPQ&riu=http%3a%2f%2fclipart-library.com%2fnew_gallery%2f81-816796_black-email-icon-png-transparent-background-email-icon.png&ehk=yuXxLk77asHBa7UkMNvlCCZMYcwZbwF1epu6wTt1lrE%3d&risl=&pid=ImgRaw&r=0" height="20px" width="20px"></img>&nbsp;archanaa1404@gmail.com</a>
      </div>
    </div>
  </div>
  <footer class="footer">
    <div className='last'>
      <p>----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------</p>
        <p>@All rights covered by LiveTix&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Terms and Conditions &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Privacy and Policy</p>
    </div>
    </footer>
  </div>

  )
}

export default Homepage
