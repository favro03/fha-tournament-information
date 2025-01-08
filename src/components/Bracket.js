import React from 'react';

import miniMite from '../assets/images/miniMite.png'
import squirtC from '../assets/images/squirtC.png'
  

const Bracket = () => {
  return (
    <div className='bracket-container'>
      <h2 style={{ marginTop: '30px', fontWeight: 'bold' }}>Brackets</h2>


      <img className='marginBottom' src={miniMite} alt="Tournament Mini Mite Bracket" />
    <img className='marginBottom' src={squirtC} alt="Tournament Squirt C" />
         
   
       
 
     
    </div>
  );
};

export default Bracket;
