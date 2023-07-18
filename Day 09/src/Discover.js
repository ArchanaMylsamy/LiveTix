import React from 'react';
import './Discover.css'
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
      <h1>Lets Exploree...</h1>
      <div className='buttonfordiscover'>
        <button className="buttonadd"onClick={handleAddShow}>Add Show</button>
        <br>
        </br><br></br><br></br><br></br>
        <button className="buttonget"onClick={handleGetShows}>Get Shows</button><br></br><br></br><br></br><br></br>
        <button className="buttonupdate"onClick={handleUpdateShow}>Update Show</button><br></br><br></br><br></br><br></br>
        <button className="buttondelete"onClick={handleDeleteShow}>Delete Show</button><br></br>
      </div>
    </div>
  );
};

export default ShowManagementPage;
