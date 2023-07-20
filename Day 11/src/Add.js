import React, { useState } from 'react';
import './Add.css'
import axios from 'axios'

const AddShowForm = () => {
    const [showId, setShowId] = useState('');
    const [showLead, setShowLead] = useState('');
    const [showTitle, setShowTitle] = useState('');
    const [genre, setGenre] = useState('');
    const [type, setType] = useState('Live');
    const [date, setDate] = useState('');
    const [fromTime, setFromTime] = useState('');
    const [toTime, setToTime] = useState('');
    const [location, setLocation] = useState('');
    const [notification, setNotification] = useState('');
    const [formErrors, setFormErrors] = useState({});
  
    const validateForm = () => {
      const errors = {};
  
      if (!showId) {
        errors.showId = 'Event ID is required';
      }
  
      if (!showLead) {
        errors.showLead = 'Show Lead is required';
      }
  
      if (!showTitle) {
        errors.showTitle = 'Show Title is required';
      }
  
      if (!genre) {
        errors.genre = 'Select Genre is required';
      }
  
      if (!date) {
        errors.date = 'Choose Date is required';
      }
  
      if (!fromTime) {
        errors.fromTime = 'Select Time From is required';
      }
  
      if (!toTime) {
        errors.toTime = 'Select Time To is required';
      }
  
      if (!location) {
        errors.location = 'Select Location is required';
      }
  
      return errors;
    };
  
    
  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm();

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      setNotification('');
    } else {
      // Submit the form data to the server using Axios
      const formData = {
        concertid: showId,
        concertlead: showLead,
        showtitle: showTitle,
        genre: genre,
        type: type,
        date: date,
        timefrom: fromTime,
        timeto: toTime,
        location: location,
      };

      axios.post('http://127.0.0.1:8080/post', formData)
        .then(response => {
          // Handle the successful response from the server
          setFormErrors({});
          setNotification('Show added successfully!');
        })
        .catch(error => {
          // Handle errors from the server
          console.error('Error submitting form:', error);
          setNotification('Failed to add show. Please try again later.');
        });
    }
  };

  return (
    <div className='addcrud'>
      <h1 className='arh1'>Add Events</h1>
      <form className="arform"onSubmit={handleSubmit}>
        <div>
          <label className="arid"htmlFor="showId">Event ID:</label>
          <input type="text" id="arshowId" value={showId} onChange={(e) => setShowId(e.target.value)} />
          {formErrors.showId && <p className="error-message">{formErrors.showId}</p>}
        </div>
        <div>
          <label className="arlead"htmlFor="showLead">Event Lead:</label>
          <input type="text" id="arshowLead" value={showLead} onChange={(e) => setShowLead(e.target.value)} />
          {formErrors.showLead && <p className="error-message">{formErrors.showLead}</p>}
        </div>
        <div>
          <label className="artitle"htmlFor="showTitle">Show Title:</label>
          <input type="text" id="arshowTitle" value={showTitle} onChange={(e) => setShowTitle(e.target.value)} />
          {formErrors.showTitle && <p className="error-message">{formErrors.showTitle}</p>}
        </div>
        <div>
          <label className="argenre"htmlFor="genre">Select Genre:</label>
          <select id="arGenre" value={genre} onChange={(e) => setGenre(e.target.value)}>
            <option value="">Select Genre</option>
            <option value="Action">Action</option>
            <option value="Comedy">Comedy</option>
            <option value="Drama">Drama</option>
            <option value="Romance">Romance</option>
            {/* Add more genre options as needed */}
          </select>
          {formErrors.genre && <p className="error-message">{formErrors.genre}</p>}
        </div>
        <div>
          <label className='artype'>Type (Live or Video):</label>
          <input type="radio" id="arlive" name="type" value="Live" checked={type === 'Live'} onChange={() => setType('Live')} />
          <label className="arlive"htmlFor="live">Live</label>
          <input type="radio" id="arvideo" name="type" value="Video" checked={type === 'Video'} onChange={() => setType('Video')} />
          <label className="arvideo" htmlFor="video">Video</label>
        </div>
        <div>
          <label className="ardate"htmlFor="date">Choose Date:</label>
          <input type="date" id="ardate" value={date} onChange={(e) => setDate(e.target.value)} />
        </div>
        <div>
          <label className="artimefrom"htmlFor="fromTime">Select Time From:</label>
          <input type="time" id="arfromTime" value={fromTime} onChange={(e) => setFromTime(e.target.value)} />
        </div>
        <div>
          <label className="artimeto"htmlFor="toTime">Select Time To:</label>
          <input type="time" id="artoTime" value={toTime} onChange={(e) => setToTime(e.target.value)} />
        </div>
        <div>
          <label className="arlocation"htmlFor="location">Select Location:</label>
          <select id="arlocation" value={location} onChange={(e) => setLocation(e.target.value)}>
            <option value="">Select Location</option>
            <option value="Chennai">Chennai</option>
            <option value="Coimbatore">Coimbatore</option>
            <option value="Bangalore">Banglore</option>
            {/* Add more location options as needed */}
          </select>
        </div>
        <button className="arsubmit"type="submit">Submit</button>
      </form>
      {notification && <p className='arp'>{notification}</p>}
    </div>
  );
};

export default AddShowForm;