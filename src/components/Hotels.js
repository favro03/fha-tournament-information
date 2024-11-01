import React from 'react';
import { Button } from 'react-bootstrap';

const Hotel = () => {
  // Example hotel data
  const hotels = [
    {
      name: 'Grandstay Residential Suites',
      address: '1500 20th Street NW, Faribault, MN',
      description1: '(507) 334-2888'
    },
    {
      name: 'Days Inn by Wyndham',
      address: '1920 Cardinal Ln, Faribault, MN',
      description1: '(507) 334-6835'
    },
    {
      name: 'Boarders Inn and Suites',
      address: '1801 Lavender Dr, Faribault, MN',
      description1: '(507) 334-9464'
    }
  ];

  const handleShowMap = (hotel) => {
    // Open Google Maps with the hotel address
    const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(hotel.address)}`;
    window.open(mapsUrl, '_blank'); // Open in a new tab
  };

  return (
    <div className='hotel-container'>
      <h1 className='hotel-title'>Hotels</h1>
      <div className="hotel-list">
        {hotels.map((hotel, index) => (
          <Button
            key={index}
            variant="primary"
            className="hotel-section-button"
            onClick={() => handleShowMap(hotel)}
          >
            <div className="hotel-info">
              <h4>{hotel.name}</h4>
              <p>{hotel.address}</p>
              <p>{hotel.description1}</p>
            </div>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Hotel;
