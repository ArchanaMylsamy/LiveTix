import React, { useState } from 'react';
import './Signin.css';
import { Link, useNavigate } from 'react-router-dom';
import Homepage from './Homepage';

function Signin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform validation of username and password
    if (username.trim() === 'yourUsername' && password.trim() === 'yourPassword') {
      // Navigate to the next page
      navigate('/Homepage');
    } else {
      // Handle invalid login credentials
      console.log('Invalid username or password');
    }
  };

  const isButtonDisabled = !username || !password; // Disable button if username or password is empty

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
                    type="text"
                    minLength="4"
                    className="input-field"
                    autoComplete="off"
                    placeholder="Username"
                    required
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
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
                <Link to="/Homepage">
                  <input
                    type="submit"
                    value="Let's Start"
                    className="sign-btn"
                    disabled={isButtonDisabled} // Disable button if username or password is empty
                  />
                </Link>
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

export default Signin;
