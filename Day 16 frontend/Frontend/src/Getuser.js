
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Getuser.css'

function View() {
  const [taskData, setTaskData] = useState([]); // Fix variable name here

  useEffect(() => {
    const fetchTaskData = async () => {
      const token = localStorage.getItem('token');
      console.log(token);
      try {
        const response = await axios.get('http://localhost:8080/getuser', {
          headers: {
            "cache-control": 'no-cache',
            "Authorization": `Bearer ${token}`, // Add the token to the request headers
          },
        });

        setTaskData(response.data);
        console.log("response.data",response)
      } catch (error) {
        console.log(error);
      }
    };

    fetchTaskData();
  }, []);

  useEffect(() => {
    console.log(taskData); // This will log the updated dataList whenever it changes.
  }, [taskData]);
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
          {taskData.map((_user) => (
            <tr key={_user.id}>
              <td>{_user.id}</td>
              <td>{_user.name}</td>
              <td>{_user.email}</td>
              <td>{_user.password}</td>
              <td>{_user.dob}</td>
              
            
              
            </tr>
          ))}
        </tbody>
        </div>
      </table>
    </div>
  );
}

export default View;
