import React from 'react';
import './LocationMap.css';

function LocationMap() {
  // Replace these coordinates with your desired location
  const latitude = 11.045010791896236;
  const longitude = 76.96224981482239;

  const mapSrc = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.487009044154!2d${longitude}!3d${latitude}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba857c44b23d0f7%3A0xa71b3d625ebf1d12!2sSKCET!5e0!3m2!1sen!2sin!4v1626459839047!5m2!1sen!2sin`;

  return (
    <div className="map-container">
      <iframe
        title="SKCET Location"
        width="100%"
        height="100vh"
        frameBorder="0"
        style={{ border: 0 }}
        src={mapSrc}
        allowFullScreen
      ></iframe>
    </div>
  );
}

export default LocationMap;
