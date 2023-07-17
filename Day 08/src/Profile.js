import React,{useRef,useState} from 'react';
import './Profile.css';

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
    console.log('Changes saved successfully!');
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
                src="http://bootdey.com/img/Content/avatar/avatar1.png"
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
                    placeholder="Username..."
                    
                  />
                </div>
                {/* Form Group (first name) */}
                <div className="form-group">
                  
                  <input
                    className="form-control"
                    id="inputFirstName"
                    type="text"
                    placeholder="First name..."
                    
                  />
                </div>
                {/* Form Group (last name) */}
                <div className="form-group">
                  
                  <input
                    className="form-control"
                    id="inputLastName"
                    type="text"
                    placeholder="Last name..."
                    
                  />
                </div>
                
                {/* Form Group (location) */}
                <div className="form-group">
                 
                  <input
                    className="form-control"
                    id="inputLocation"
                    type="text"
                    placeholder="Location..."
            
                  />
                </div>
                {/* Form Group (email address) */}
                <div className="form-group">
                 
                  <input
                    className="form-control"
                    id="inputEmailAddress"
                    type="email"
                    placeholder="Email address..."
                
                  />
                </div>
                {/* Form Group (phone number) */}
                <div className="form-group">
                  
                  <input
                    className="form-control"
                    id="inputPhone"
                    type="tel"
                    placeholder="Phone number..."
                  />
                </div>
                {/* Form Group (birthday) */}
                <div className="form-group">
                 
                  <input
                    className="form-control"
                    id="inputBirthday"
                    type="date"
                    name="birthday"
                    placeholder="Birthday..."
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
