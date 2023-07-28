import React from 'react';
import './UserDetails.css'
import {Link} from 'react-router-dom'

import './Getuser'
import './Deleteuser'
const ShowManagementPage = () => {
  const handleAddShow = () => {
    // Implement the functionality to add a show
    console.log('Adding a show...');
  };

  const handleGetShows = () => {
    // Implement the functionality to get shows
    console.log('Getting shows...');
  };

  const handleUpdateShow = () => {
    // Implement the functionality to update a show
    console.log('Updating a show...');
  };

  const handleDeleteShow = () => {
    // Implement the functionality to delete a show
    console.log('Deleting a show...');
  };

  return (
    <div className='discoverings'>
      
      <div className='buttonfordiscover'>
       
        <button className="buttonget"onClick={handleGetShows}><Link to="/Getuser">Get User</Link></button><br></br><br></br><br></br><br></br>

        <button className="buttondelete"onClick={handleDeleteShow}><Link to="/Deleteuser">Delete User</Link></button><br></br>
      </div>
    </div>
  );
};

export default ShowManagementPage;
