import React, { useState } from 'react';
import './login.css';
import './Signin'
import { Link } from 'react-router-dom';

function Login() {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [dob, setDob] = useState('');
  const [gender, setGender] = useState('');
  const [error, setError] = useState('');

  const isButtonDisabled = !name || !password || !email || !dob || !gender;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isButtonDisabled) {
      setError('Please fill out all the fields.');
      return;
    }

    // Perform further validation or submit the form

    setError('');
  };

  return (
    <div className='box1'>
      <div className="box">
        <div className="inner-box">
          <div className="forms-wrap">
            <form onSubmit={handleSubmit} autoComplete="off" className="sign-in-form">
              <div className="logo">
                <img src="https://thumbs.dreamstime.com/b/vector-illustration-singing-woman-karaoke-party-copy-space-75761308.jpg" alt="easyclass" />
                <h4>Register here!</h4>
              </div>

              <div className="heading">
                <h2>Welcome<img className="hi" src="https://media1.tenor.com/images/f88ee476d2f653b9cbc5a7b95acbd265/tenor.gif?itemid=11366012" alt="hi" /></h2>
                <a><img className="google" src="https://th.bing.com/th/id/OIP.Kg2FF2wpIK_HLyo8Q56ycAHaFj?pid=ImgDet&rs=1" alt="google" /></a>
                <br></br>
                <h6>--------Or--------</h6>
                <br></br>
                <h6>Already have an account?</h6>
                <Link to="/Signin"><a className='toggle'>&nbsp; &nbsp;Log In</a></Link>
              </div>

              <div className="actual-form">
                <div className="input-wrap">
                  <input
                    type="text"
                    minLength="4"
                    className="input-field"
                    autoComplete="off"
                    placeholder='Name'
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
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
                <div className="input-wrap">
                  <input
                    type="email"
                    minLength="4"
                    className="input-field"
                    autoComplete="off"
                    placeholder='Email'
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="input-wrap">
                  <input
                    type="date"
                    minLength="4"
                    className="input-field"
                    autoComplete="off"
                    placeholder='DOB'
                    required
                    value={dob}
                    onChange={(e) => setDob(e.target.value)}
                  />
                </div>

                <div className="input-wrap">
                  <input
                    type="text"
                    minLength="7"
                    className="input-field"
                    autoComplete="off"
                    placeholder='Gender'
                    required
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                  />
                </div>

                <div className="text">
                  <input type="checkbox" />
                  By signing up, I agree to the Terms of Services and Privacy Policy
                </div>
                <br />
                {error && <div className="error">{error}</div>}
                <Link to="/Signin"><input
                  type="submit"
                  value="Sign Up"
                  className="sign-btn"
                  disabled={isButtonDisabled}
                /></Link>
              </div>
            </form>
          </div>

          <div className="carousel">
            <img className="wall" src="https://images.pexels.com/photos/1540406/pexels-photo-1540406.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="carousel" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
