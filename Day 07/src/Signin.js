import React from 'react'
import './Signin.css';
import Homepage from './Homepage';
import {Link} from 'react-router-dom';

function Signin() {
  return (
      <div className='box2'>
  
      <div class="boxes">
        <div class="inner-box">
          <div class="forms-wrap">
            <form action="index.html" autocomplete="off" class="sign-in-form">
              <div class="logo">
                <img src="https://thumbs.dreamstime.com/b/vector-illustration-singing-woman-karaoke-party-copy-space-75761308.jpg" alt="easyclass" />
                <h4>LOGIN</h4>
              </div>
<div className="tagline">
   Hello friend! I'm LiveTix <br></br>
   <span className='hello'>"From Screen To Stage, All In One Place"</span><br></br>
    Lets get in Touch!
</div>
              

              <div class="actual-form">
                <div class="input-wrap">
                  <input
                    type="text"
                    minlength="4"
                    class="input-field"
                    autocomplete="off"
                    placeholder='Username'
                    required
                  />
                  
                </div>

                <div class="input-wrap"> 
                  <input
                    type="password"
                    minlength="4"
                    class="input-field"
                    autocomplete="off"
                    placeholder="Password"
                    required
                  />
                  
                </div>
        
               <a href="#" class="reset">Forgot Password?</a>
                
               
<br></br><br></br>
               
            <Link to="/Homepage"><input type="submit" value="Let's Start" class="sign-btn" /></Link>
            
              </div>
            </form>

            
          </div>

          <div class="carousel">
            
            <img className="wall" src="https://images.pexels.com/photos/11963135/pexels-photo-11963135.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"></img>

           
          </div>
        </div>
      </div>
   

 
    </div>
    
  )
}

export default Signin
