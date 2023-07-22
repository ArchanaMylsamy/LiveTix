import React from 'react'
import './Homepage.css';
import './Login';
import './Homepage';
import './Signin';
import './Calendar';
import './About';
import './Seating';
import './Profile';
import './Feedback';
import './ConcertBlog';
import './LocationMap';
import './Event';
import './Ticket';
import './Discover';
import './View';
import './Logo';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import PowerSettingsNewRoundedIcon from '@mui/icons-material/PowerSettingsNewRounded';
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import MapIcon from '@mui/icons-material/Map';
import BookOnlineIcon from '@mui/icons-material/BookOnline';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import SettingsIcon from '@mui/icons-material/Settings';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import InstagramIcon from '@mui/icons-material/Instagram';
import CallIcon from '@mui/icons-material/Call';
import MailIcon from '@mui/icons-material/Mail';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import{Link} from 'react-router-dom';
function Homepage() {
  return (
    <div>
    <div class="menu-container">
  
  <input type="checkbox" id="openmenu" class="hamburger-checkbox"></input>
  <div class="hamburger-icon">
    <label for="openmenu" id="hamburger-label">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </label>    
  </div>

    <div class="menu-pane">
      <nav>
<div class="search-box">
    <button class="btn-search"><SearchIcon sx={{ fontSize: 25,color:"white" }}className='just'> </SearchIcon></button>
    <input type="text" class="input-search" placeholder="Type to Search..."></input>
  </div>
        <ul class="menu-links">
          <li><a href="###">MENU</a>
          </li>
          <li><a href="###"><PersonIcon sx={{ fontSize: 25,color:"white" }}className='person'> </PersonIcon><Link to="/Profile">PROFILE</Link></a>
          </li>
          <li><a href="###"><MapIcon sx={{ fontSize: 25,color:"white" }}className='discover'> </MapIcon><Link to="/Discover">DISCOVER</Link></a></li>
          <li><a href="###"><BookOnlineIcon sx={{ fontSize: 25,color:"white" }}className='discover'></BookOnlineIcon><Link to="/Ticket">MY TICKET</Link></a></li>
          <li><a href="###"><CalendarMonthIcon sx={{ fontSize: 25,color:"white" }}className='person'> </CalendarMonthIcon><Link to="/Calendar">CALENDAR</Link></a></li>
          <li><a href="###"><SettingsIcon sx={{ fontSize: 25,color:"white" }}className='person'> </SettingsIcon>SETTINGS</a></li>
        </ul>
      </nav>
    </div> 
</div>
    <header class="header">


<div className='togglehead'>   
<nav class="nav-items">
      <img src="https://thumbs.dreamstime.com/b/vector-illustration-singing-woman-karaoke-party-copy-space-75761308.jpg" className='logo'></img>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <a href="#"><Link to="/Homepage">Home</Link></a>
    <a href="#"><Link to="/About">About</Link></a>
    <a href="#"><Link to="/Event">Event</Link></a>
    <a href="#"><Link to="/ConcertBlog">Blogs</Link></a>
    <a href="#"><Link to="/Contact">Contact</Link></a>   
</nav>
</div><div>
<nav class="nav">

  <Link to="/Logo"><a className='loginbutton'><PowerSettingsNewRoundedIcon sx={{ fontSize: 35,color:"white" ,paddingBottom:"10px"}}className='just'> </PowerSettingsNewRoundedIcon></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Link>
   
</nav>
</div>

  </header>
  <main>
    <div class="intro">
    <p>All the fun starts here!</p>
      <h1>LIVETIX</h1>
      <p>"From Screen to Stage,All in One Place"</p>
      <Link to="/View"><button>View More<ArrowOutwardIcon sx={{ fontSize: 25,color:"black" }}className='just2'> </ArrowOutwardIcon></button></Link>
     </div>    

    
      <div class="about-me-text">
        <p>FEATURED EVENTS</p>
        <div className='eventside'>Be sure not to miss this event TODAY.</div>
      </div>
    <div class="about-me">
      <div className='event1'><img src="https://th.bing.com/th/id/OIP.qHlGG80RfgmUU6WAWeCwygHaEK?pid=ImgDet&rs=1" alt="me"></img><p>ANIRUDH CONCERTS</p><p>14th JULY | CHENNAI</p><button className='button-33'>BUY TICKETS</button></div>&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <div className='event2'><img src="https://images.indulgexpress.com/uploads/user/imagelibrary/2017/7/14/original/AR_Rahman.jpg" alt="me"></img><p>U1 CONCERTS</p><p>19th AUGUST  |  COIMBATORE</p><button className='button-33'>BUY TICKETS</button>
      </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <div className='event3'><img src="https://th.bing.com/th/id/OIP.jhn8VyvF0zvsMmSkyQqsvwHaEU?pid=ImgDet&rs=1" alt="me"></img><p>JONITA GANDHI</p><p>22nd NOVEMBER  |  COIMBATORE</p><button className='button-33'>BUY TICKETS</button></div>
    </div>
    <div class="about-me">
      <div className='event4'><img src="https://th.bing.com/th/id/OIP.oZ_0dEHHB9T2sF9mq_0-owHaE8?pid=ImgDet&rs=1" alt="me"></img><p>ARJIT SINGH CONCERTS</p><p>24th JULY | CHENNAI</p><button className='button-33'>BUY TICKETS</button></div>&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <div className='event5'><img src="https://th.bing.com/th/id/OIP.jliUeiKgnK00Q_YDHBkXIwHaE8?pid=ImgDet&rs=1" alt="me"></img><p>SHREYA GHOSAL CONCERTS</p><p>24th AUGUST  |  COIMBATORE</p><button className='button-33'>BUY TICKETS</button>
      </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <div className='event6'><img src="https://1.bp.blogspot.com/-yj28FXdFNLM/U4Rv5g03PBI/AAAAAAAAGTw/Fp3hqAmKzow/s1600/Andrea+Concert+At+CWIFF+Event+.+Jpg+(3).jpg" alt="me"></img><p>ANDREA CONCERTS</p><p>08TH NOVEMBER  |  COIMBATORE</p><button className='button-33'>BUY TICKETS</button></div>
   
    </div>
    
  </main>
  
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
  <div class="footer">
    <div class="copy">LIVETIX&nbsp;&nbsp;&nbsp;@2023
    <br></br>From Screen To Stage ,All In One Place</div>
    
    <div class="bottom-links">
      <div class="links">
        <span>More Info</span>
        <Link to="/Homepage"><a href="#">Home</a></Link>
        <Link to="/About"><a href="#">About</a></Link>
        <a href="#">Event</a>
        <Link to="/ConcertBlog"><a href="#">Blogs</a></Link>
      </div>
      <div class="links">
        <span>FAQ Careers</span>
        <Link to="/Feedback"><a href="#">Feedback</a></Link>
        <Link to="/Contact"><a href="#">Contact</a></Link>
      </div>
      <div class="links">
        <a href="#"><LocationOnIcon sx={{ fontSize: 25,color:"white" }}className='just2'></LocationOnIcon><Link to="/LocationMap">SKCET,Coimbatore 641008</Link></a>
         
        <a href="tel:9342524855"><CallIcon sx={{ fontSize: 25,color:"white" }}className='just2'></CallIcon>9342524855</a>
        <a href="mailto:archanaa1404@gmail.com"><MailIcon sx={{ fontSize: 25,color:"white" }}className='just2'></MailIcon>archanaa1404@gmail.com</a>
      </div>
    </div>
  </div>
  <footer class="footer">
    <div className='last'>
        <p>@All rights covered by LiveTix&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="https://www.instagram.com/your_instagram_url"><InstagramIcon sx={{ fontSize: 25,color:"white" }}className='just2'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</InstagramIcon></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="https://www.linkedin.com/your_linkedin_url"><LinkedInIcon sx={{ fontSize: 25,color:"white" }}className='just2'></LinkedInIcon></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="https://www.twitter.com/your_twitter_url"><TwitterIcon sx={{ fontSize: 25,color:"white" }}className='just2'></TwitterIcon></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="https://www.youtube.com/your_youtube_url"><YouTubeIcon sx={{ fontSize: 25,color:"white" }}className='just2'></YouTubeIcon></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Terms and Conditions &nbsp;&nbsp;&nbsp;Privacy and Policy</p>
    </div>
    </footer>
  </div>

  )
}

export default Homepage
