import React, { useState } from 'react';
import './SigninAdmin.css';
import { Link, useNavigate } from 'react-router-dom';
import HomePageAdmin from './HomePageAdmin';
import axios from 'axios';

function SigninAdmin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Perform validation of username and password
   
      // Prepare the data to be sent in the POST request
      const data = {
        email: email,
        password: password,
      };
      try{
        const response = await axios.post('http://127.0.0.1:8080/api/v1/auth/authenticate',data)
        .then((response)=>{
          console.log(response.data);
          localStorage.setItem('token',response.data.token);
          console.log(localStorage.getItem('token'));
        })      
        
        alert("Login Successful.");
         navigate("/HomePageAdmin");
        
        }
        catch(error){
          alert("Invalid Password");
        }
      }
  const isButtonDisabled = !email || !password; // Disable button if username or password is empty

  return (
    <div className='box2'>
      <div className="boxes">
        <div className="inner-box">
          <div className="forms-wrap">
            <form onSubmit={handleSubmit} autoComplete="off" className="sign-in-form">
              <div className="logo">
                <img src="https://thumbs.dreamstime.com/b/vector-illustration-singing-woman-karaoke-party-copy-space-75761308.jpg" alt="easyclass" />
                <h4>LOGIN</h4>
              </div>
              <div className="tagline">
                Hello friend! I'm LiveTix <br></br>
                <span className='hello'>"From Screen To Stage, All In One Place"</span><br></br>
                Let's get in Touch!
              </div>
              <div className="actual-form">
                <div className="input-wrap">
                  <input
                    type="email"
                    minLength="4"
                    className="input-field"
                    autoComplete="off"
                    placeholder="Email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="input-wrap">
                  <input
                    type="password"
                    minLength="4"
                    className="input-field"
                    autoComplete="off"
                    placeholder="Password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <a href="#" className="reset">Forgot Password?</a>
                <br></br><br></br>
               
                  <input
                    type="submit"
                    value="Let's Start"
                    className="sign-btn"
                    disabled={isButtonDisabled} // Disable button if username or password is empty
                  />
                
              </div>
            </form>
          </div>
          <div className="carousel">
            <img className="wall" src="https://images.pexels.com/photos/11963135/pexels-photo-11963135.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="carousel" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SigninAdmin;
