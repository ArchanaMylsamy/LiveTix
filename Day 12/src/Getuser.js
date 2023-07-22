
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Getuser.css'

function View() {
  const [taskData, setTaskData] = useState([]);

  useEffect(() => {
    axios
      .get('http://127.0.0.1:8080/getuser')
      .then((response) => {
        setTaskData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      
      <table className="genuserbg">
      <div className="container124566">
        <thead>
          <tr className="form-title">
            <th className="header-cell">User ID</th>
            <th className="header-cell">UserName</th>
            <th className="header-cell">Email</th>
            <th className="header-cell">Password</th>
            <th className="header-cell">DOB</th>

          
          </tr>
        </thead>
        <tbody>
          {taskData.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.password}</td>
              <td>{user.dob}</td>
              
            
              
            </tr>
          ))}
        </tbody>
        </div>
      </table>
    </div>
  );
}

export default View;
