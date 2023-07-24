import React, { useState } from 'react';
import './Deleteuser.css'; 
import axios from 'axios';

const EventForm = () => {
  const [userId, setuserId] = useState('');
  const [notification, setNotification] = useState('');
  const [formError, setFormError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (userId.trim() === '') {
      setFormError('User ID is required.');
      setNotification('');
    }  else {
      // Clear any previous errors
      setFormError('');
      const formData = {
        id: userId,
      }
      // Send the DELETE request using Axios
      axios.delete(`http://127.0.0.1:8080/deleteuser/${userId}`,formData)
        .then((response) => {
          // Handle the successful response from the server
          setNotification('User deleted successfully!');
        })
        .catch((error) => {
          // Handle errors from the server
          console.error('Error deleting event:', error);
          setNotification('Failed to delete user. Please try again later.');
        });
    }
  };

  return (
    <div className='deletebaggg'>
    <div className="event-form-container">
      <h1>Delete Event</h1><br></br><br></br>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="userId">User ID:</label>
          <input
            type="text"
            id="userId"
            value={userId}
            onChange={(e) => setuserId(e.target.value)}
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
