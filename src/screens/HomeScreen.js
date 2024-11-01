import React from 'react';
import Hotels from "../components/Hotels";
import Restaurants from "../components/Restaurants";
import Rules from "../components/Rules";
import Bracket from '../components/Bracket';

const HomeScreen = ({ scrollToSection, rulesRef, hotelsRef, restaurantsRef, bracketRef }) => {
  return (
    <div>
    <div className='hero'>
      {/* Buttons for scrolling */}
      <div className="container button-container">
        <div className="row">
          {/* Rules Button on the left */}
          <div className="col-md-4 d-grid">
            <button className="btn rules-button" onClick={() => scrollToSection(rulesRef)}>
              <h3 className="rules-btn-txt">Tournament Rules</h3>
            </button>
          </div>
  
          {/* Hotels and Restaurants buttons stacked in the center */}
          <div className="col-md-4 d-grid">
            <button className="btn hotel-button w-100" onClick={() => scrollToSection(hotelsRef)}>
              <h3 className="rules-btn-txt">Hotels</h3>
            </button>
            <button className="btn restaurant-button w-100 mt-3" onClick={() => scrollToSection(restaurantsRef)}>
              <h3 className="rules-btn-txt">Restaurants</h3>
            </button>
          </div>
  
          {/* Bracket Button on the right */}
          <div className="col-md-4 d-grid">
            <button className="btn bracket-button" onClick={() => scrollToSection(bracketRef)}>
              <h3 className="rules-btn-txt">Bracket</h3>
            </button>
          </div>
        </div>
      </div>
    </div>
  
    <div ref={bracketRef}>
      <Bracket />
    </div>
    <div ref={restaurantsRef}>
      <Restaurants />
    </div>
    <div ref={hotelsRef}>
      <Hotels />
    </div>
    <div ref={rulesRef}>
      <Rules />
    </div>
  </div>
  
  );
};

export default HomeScreen;
