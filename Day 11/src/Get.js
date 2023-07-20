
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Get.css'

function View() {
  const [taskData, setTaskData] = useState([]);

  useEffect(() => {
    axios
      .get('http://127.0.0.1:8080/get')
      .then((response) => {
        setTaskData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      
      <table className="gen">
      <div className="container12">
        <thead>
          <tr className="form-title">
            <th className="header-cell">Concert ID</th>
            <th className="header-cell">Concert Lead</th>
            <th className="header-cell">Show Title</th>
            <th className="header-cell">Genre</th>
            <th className="header-cell">Type</th>
            <th className="header-cell">Date</th>
            <th className="header-cell">Start Time</th>
            <th className="header-cell">End Time</th>
            <th className="header-cell">Location</th>
          
          </tr>
        </thead>
        <tbody>
          {taskData.map((events) => (
            <tr key={events.concertid}>
              <td>{events.concertid}</td>
              <td>{events.concertlead}</td>
              <td>{events.showtitle}</td>
              <td>{events.genre}</td>
              <td>{events.type}</td>
              <td>{events.date}</td>
              <td>{events.timefrom}</td>
              <td>{events.timeto}</td>
              <td>{events.location}</td>
            
              
            </tr>
          ))}
        </tbody>
        </div>
      </table>
    </div>
  );
}

export default View;
