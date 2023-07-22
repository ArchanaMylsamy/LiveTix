import React from 'react'
import './HomePageAdmin.css';
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
import './UserDetails'
import './DiscoverAdmin'
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
          <li><a href="###"><PersonIcon sx={{ fontSize: 25,color:"white" }}className='person'> </PersonIcon><Link to="/UserDetails">USER DETAILS</Link></a>
          </li>
          <li><a href="###"><MapIcon sx={{ fontSize: 25,color:"white" }}className='discover'> </MapIcon><Link to="/DiscoverAdmin">DISCOVER</Link></a></li>
          <li><a href="###"><CalendarMonthIcon sx={{ fontSize: 25,color:"white" }}className='person'> </CalendarMonthIcon><Link to="">CALENDAR</Link></a></li>
        </ul>
      </nav>
    </div> 
</div>
    <header class="header">


<div className='togglehead'>   
<nav class="nav-items">
      <img src="https://thumbs.dreamstime.com/b/vector-illustration-singing-woman-karaoke-party-copy-space-75761308.jpg" className='logo'></img>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
 
      
</nav>
</div><div>
<nav class="nav">

  <Link to="/Logo"><a className='loginbutton'><PowerSettingsNewRoundedIcon sx={{ fontSize: 45,color:"white" ,paddingBottom:"10px"}}className='just'> </PowerSettingsNewRoundedIcon></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Link>
   
</nav>
</div>

  </header>
  <main>
    <div class="intro">
    <p>All the fun starts here!</p>
      <h1>LIVETIX</h1>
      <p>"From Screen to Stage,All in One Place"</p>
     
     </div>    
   </main>
  </div>

  )
}

export default Homepage
