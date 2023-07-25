import React, { useState } from 'react';
import './FeedbackForm.css'
import axios from 'axios'

const AddShowForm = () => {
    const [feedid, setfeedbackid] = useState('');
   
    const [feedcomment, setfeedcomment] = useState('');
    const [type, settype] = useState('');
    const [date, setdate] = useState('');
    const [rating, setrating] = useState('');
    const [notification, setNotification] = useState('');
    const [formErrors, setFormErrors] = useState({});
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      const formData = {
        feedid:feedid,
        feedcomment:feedcomment,
        type:type,
        date:date,
        rating:rating
      };
  
      // Get the JWT token from the local storage (assuming it's saved after login)
      const token = localStorage.getItem('token');
      if (!token) {
        console.error('No JWT token found.');
        return;
      }
  
      try {
        // Replace 'http://example.com/api/concerts' with the actual endpoint URL
        const response = await axios.post('http://127.0.0.1:9124/api/v1/feed/postfeed', formData, {
          headers: {
            Authorization: `Bearer ${token}`, // Include the JWT token as a Bearer token
          },
        });
  
        console.log(response.data); // Handle the response as needed
        // Optionally, you can reset the form fields after successful submission:
        setfeedbackid('');
        setfeedcomment('');
        setdate('');
        settype('');
        setrating('');
        window.alert("Feedback Submitted");
        
      } catch (error) {
        console.error(error);
      }
    };
    

  return (
    <div className='feedbackcrud'>
      <h1 className='farh1'>Give your Feedback</h1>
      <form className="farform"onSubmit={handleSubmit}>
        <div>
          <label className="farid"htmlFor="showId">ID:</label>
          <input type="text" id="arshowId" value={feedid} onChange={(e) => setfeedbackid(e.target.value)} />
          {formErrors.showId && <p className="error-message">{formErrors.showId}</p>}
        </div>
        <div>
          <label className="farlead"htmlFor="showLead">Comment:</label>
          <input type="text" id="arshowLead" value={feedcomment} onChange={(e) => setfeedcomment(e.target.value)} />
          {formErrors.showLead && <p className="error-message">{formErrors.showLead}</p>}
        </div>
       
        <div>
          <label className='fartype'>Type:</label>
          <input type="radio" id="arlive" name="type" value="Live" checked={type === 'Good'} onChange={() => settype('Good')} />
          <label className="farlive"htmlFor="live">Good</label>
          <input type="radio" id="arvideo" name="type" value="Video" checked={type === 'Bad'} onChange={() => settype('Bad')} />
          <label className="farvideo" htmlFor="video">Bad</label>
        </div>
        <div>
          <label className="fardate"htmlFor="date">Date:</label>
          <input type="date" id="ardate" value={date} onChange={(e) => setdate(e.target.value)} />
        </div>
        
        <div>
          <label className="farlocation"htmlFor="location">Rating:</label>
          <select id="arlocation" value={rating} onChange={(e) => setrating(e.target.value)}>
            <option value="">Select Rating</option>
            <option value="5*">5*</option>
            <option value="4*">4*</option>
            <option value="3*">3*</option>
            {/* Add more location options as needed */}
          </select>
        </div>
        <button className="farsubmit"type="submit">Submit</button>
      </form>
      {notification && <p className='farp'>{notification}</p>}
    </div>
  );
};

export default AddShowForm;