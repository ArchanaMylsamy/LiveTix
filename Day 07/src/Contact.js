import React from 'react';
import './Contact.css';

function Contact() {
  const sendMessage = () => {
    // Code to send the message goes here
    console.log('Message sent!');
  };

  return (
    <div className="background">
      <h1>PING US HERE!!!</h1><br></br>
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
              <div className="app-contact">CONTACT INFO : +91 93 42 52 48 55</div>
            </div>
            <div className="screen-body-item">
              <div className="app-form">
                <div className="app-form-group">
                  <input className="app-form-control" placeholder="NAME" />
                </div>
                <div className="app-form-group">
                  <input className="app-form-control" placeholder="EMAIL" />
                </div>
                <div className="app-form-group">
                  <input className="app-form-control" placeholder="CONTACT NO" />
                </div>
                <div className="app-form-group message">
                  <input className="app-form-control" placeholder="MESSAGE" />
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
