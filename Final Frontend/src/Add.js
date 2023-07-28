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
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      const formData = {
        concertid: showId,
        concertlead: showLead,
        showtitle: showTitle,
        genre:genre,
        type:type,
        date:date,
        timefrom:fromTime,
        timeto:toTime,
        location:location,
      };
  
      // Get the JWT token from the local storage (assuming it's saved after login)
      const token = localStorage.getItem('token');
      if (!token) {
        console.error('No JWT token found.');
        return;
      }
  
      try {
        // Replace 'http://example.com/api/concerts' with the actual endpoint URL
        const response = await axios.post('http://127.0.0.1:8080/post', formData, {
          headers: {
            Authorization: `Bearer ${token}`, // Include the JWT token as a Bearer token
          },
        });
  
        console.log(response.data); // Handle the response as needed
        // Optionally, you can reset the form fields after successful submission:
        setShowId('');
        setShowLead('');
        setShowTitle('');
        setGenre('');
        setType('');
        setDate('');
        setFromTime('');
        setToTime('');
        setLocation('');
        window.alert('Data added successfully!');
      } catch (error) {
        console.error(error);
      }
    };
    

  return (
    <div className='addcrud' >
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