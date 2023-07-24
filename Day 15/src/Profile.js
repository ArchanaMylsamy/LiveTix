import React,{useRef,useState} from 'react';
import './Profile.css';
import axios from 'axios';

const ProfileAccountDetails = () => {
  const fileInputRef = useRef(null);
  const [selectedFileName, setSelectedFileName] = useState('');

  const handleUploadImage = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setSelectedFileName(selectedFile ? selectedFile.name : '');
  };
  const handleSaveChanges = () => {
    // Perform any necessary logic here before saving changes
    const id = document.getElementById('inputUsername').value;
    const name = document.getElementById('inputFirstName').value;
    const password = document.getElementById('inputLastName').value;
    const email = document.getElementById('inputLocation').value;
    const dob = document.getElementById('inputEmailAddress').value;

    // Create the data object to be sent in the POST request
    const formData = {
      id,
      name,
      password,
      email,
      dob,
    };

    // Make the POST request using Axios
    axios
      .put('http://127.0.0.1:8080/putuser', formData)
      .then((response) => {
        // Handle the response here if needed
        console.log(response.data);
      })
      .catch((error) => {
        // Handle errors here if needed
        console.error(error);
      });
  };
   
  return (
    <div className="container-xl px-4 mt-4">
    <div className='imageeeee'>
      <hr className="mt-0 mb-4" />
      <div className="row">
        <div className="col-xl-4">
          {/* Profile picture card */}
          <div className="card mb-4 mb-xl-0">
            <div className="card-header">Profile Picture</div>
            <div className="card-body text-center">
              {/* Profile picture image */}
              <img
                className="img-account-profile rounded-circle mb-2"
                src="https://cdn4.iconfinder.com/data/icons/avatars-21/512/avatar-circle-human-female-2-1024.png"
                alt=""
              />
              {/* Profile picture help block */}
              <div className="small font-italic text-muted mb-4">
                JPG or PNG no larger than 5 MB
              </div>
              {/* Profile picture upload button */}
              <button className="btn btn-primary" type="button" onClick={handleUploadImage}>
                Upload new image
              </button>
           
            
              <input
                ref={fileInputRef}
                type="file"
                style={{ display: 'none' }}
                accept="image/*"
                onChange={handleFileChange}
              />
              {selectedFileName && <p>Selected File: {selectedFileName}</p>}
            </div>
          </div>
        </div>
        </div>
        </div>
        <div className='formmmmmm'>
        <div className="col-xl-8">
          {/* Account details card */}
          <div className="card mb-4">
            <div className="card-header">User Details</div>
            <div className="card-body">
              <form>
                {/* Form Group (username) */}
                <div className="form-group">
                  
                  <input
                    className="form-control"
                    id="inputUsername"
                    type="text"
                    placeholder="User-Id..."
                    
                  />
                </div>
                {/* Form Group (first name) */}
                <div className="form-group">
                  
                  <input
                    className="form-control"
                    id="inputFirstName"
                    type="text"
                    placeholder="Username..."
                    
                  />
                </div>
                {/* Form Group (last name) */}
                <div className="form-group">
                  
                  <input
                    className="form-control"
                    id="inputLastName"
                    type="text"
                    placeholder="Password..."
                    
                  />
                </div>
                
                {/* Form Group (location) */}
                <div className="form-group">
                 
                  <input
                    className="form-control"
                    id="inputLocation"
                    type="email"
                    placeholder="Email..."
            
                  />
                </div>
                {/* Form Group (email address) */}
                <div className="form-group">
                 
                  <input
                    className="form-control"
                    id="inputEmailAddress"
                    type="date"
                    placeholder="DOB..."
                
                  />
                </div>
                {/* Save changes button */}
                <button className="btn btn-primary" type="button" onClick={handleSaveChanges}>
                  Save changes
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileAccountDetails;
