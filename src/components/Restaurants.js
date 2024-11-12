// Restaurant.js
import React from 'react';
import { Button } from 'react-bootstrap';
import restaurantData from './restaurantData';

const Restaurant = () => {
  const handleShowMap = (restaurant) => {
    if (restaurant.name === 'Crooked Pint') {
      window.open('https://www.crookedpint.com/locations/faribault-mn/', '_blank'); // Open site for Crooked Pint
    } else {
      const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(restaurant.address)}`;
      window.open(mapsUrl, '_blank'); // Open Google Maps for other restaurants
    }
  };

  return (
    <div className='restaurant-container'>
      <h1 className="restaurant-title">Restaurants</h1>
      <div className="restaurant-list">
        {restaurantData.map((restaurant, index) => (
          <Button
            key={index}
            variant="primary"
            className="all-restaurant-button "
            onClick={() => handleShowMap(restaurant)}
          >
            {restaurant.name}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Restaurant;
