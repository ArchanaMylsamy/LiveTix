import React, { useState } from 'react';
import './Delete.css'; 
import axios from 'axios';

const EventForm = () => {
  const [eventId, setEventId] = useState('');
  const [taskDeleted, setTaskDeleted] = useState(false);
  const [notification, setNotification] = useState('');
  const [formError, setFormError] = useState('');



    const handleDeleteTask = async (e) => {
      e.preventDefault();
      const token = localStorage.getItem('token');
  
      // Check if the token is available and valid
      if (!token) {
        console.log('No token found. Redirect to login page or handle the error.');
        return;
      }
  
      const eventId = e.target.elements.eventId.value;
  
      try {
        await axios.delete(`http://127.0.0.1:8080/delete/${eventId}`, {
          headers: {
            Authorization: `Bearer ${token}`, // Add the token to the request headers
          },
        });
  
        setTaskDeleted(true);
        window.alert('Deleted successfully!');
      } catch (error) {
        console.error(error);
        // Handle the error appropriately, such as showing an error message to the user
      }
    };
  

  return (
    <div className='deleteba'>
    <div className="event-form-container">
      <h1 className='ipo'>Delete Event</h1><br></br><br></br>
      <form onSubmit={handleDeleteTask}>
        <div  className="puthusu"><br></br>
          <label className="whhh"htmlFor="eventId">Event ID:</label>
          <input
            type="text"
            id="eventId"
            value={eventId}
            onChange={(e) => setEventId(e.target.value)}
          />
        </div>
        {formError && <p className="error-message">{formError}</p>}
        <button type="submit">Submit</button>
      </form>
      {notification && <p className='submitlaba'>{notification}</p>}
    </div>
    </div>
  );
};

export default EventForm;
