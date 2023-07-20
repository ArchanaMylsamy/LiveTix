import React, { useState } from 'react';
import './Delete.css'; 
import axios from 'axios';

const EventForm = () => {
  const [eventId, setEventId] = useState('');
  const [notification, setNotification] = useState('');
  const [formError, setFormError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (eventId.trim() === '') {
      setFormError('Event ID is required.');
      setNotification('');
    }  else {
      // Clear any previous errors
      setFormError('');
      const formData = {
        concertid: eventId,
      }
      // Send the DELETE request using Axios
      axios.delete(`http://127.0.0.1:8080/delete/${eventId}`,formData)
        .then((response) => {
          // Handle the successful response from the server
          setNotification('Event deleted successfully!');
        })
        .catch((error) => {
          // Handle errors from the server
          console.error('Error deleting event:', error);
          setNotification('Failed to delete event. Please try again later.');
        });
    }
  };

  return (
    <div className='deleteba'>
    <div className="event-form-container">
      <h1>Delete Event</h1><br></br><br></br>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="eventId">Event ID:</label>
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
