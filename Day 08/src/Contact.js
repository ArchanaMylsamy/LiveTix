import React from 'react';
import './Contact.css';

function Contact() {
  const sendMessage = () => {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const contactNo = document.getElementById('contactNo').value;
    const message = document.getElementById('message').value;

    const mailtoLink = `mailto:727721euit011@skcet.ac.in?subject=Contact Form Submission&body=Name: ${name}%0D%0AEmail: ${email}%0D%0AContact No: ${contactNo}%0D%0AMessage: ${message}`;

    window.location.href = mailtoLink;
  };

  return (
    <div className="background">
      <h1>PING US HERE!!!</h1>
      <h2>We will assist you...</h2>
      <div className="container">
        <div className="screen">
          <div className="screen-header">
            <div className="screen-header-left">
              <div className="screen-header-button close" />
              <div className="screen-header-button maximize" />
              <div className="screen-header-button minimize" />
            </div>
            <div className="screen-header-right">
              <div className="screen-header-ellipsis" />
              <div className="screen-header-ellipsis" />
              <div className="screen-header-ellipsis" />
            </div>
          </div>
          <div className="screen-body">
            <div className="screen-body-item left">
              <div className="app-title">
                <span>CONTACT</span>
                <span>US</span>
              </div>
              <div className="app-contact">CONTACT INFO: +91 93 42 52 48 55</div>
            </div>
            <div className="screen-body-item">
              <div className="app-form">
                <div className="app-form-group">
                  <input id="name" className="app-form-control" placeholder="NAME" />
                </div>
                <div className="app-form-group">
                  <input id="email" className="app-form-control" placeholder="EMAIL" />
                </div>
                <div className="app-form-group">
                  <input id="contactNo" className="app-form-control" placeholder="CONTACT NO" />
                </div>
                <div className="app-form-group message">
                  <input id="message" className="app-form-control" placeholder="MESSAGE" />
                </div>
                <div className="app-form-group buttons">
                  <button className="app-form-button">CANCEL</button>
                  <button className="app-form-button2" onClick={sendMessage}>SEND</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
