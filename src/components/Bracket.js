import React from 'react';


import miteBracket from '../assets/images/miteBracket.png'
import squirtC from '../assets/images/squirtC.png'
  

const Bracket = () => {
  return (
    <div className='bracket-container'>
      <h2 style={{ marginTop: '30px', fontWeight: 'bold' }}>Brackets</h2>


      <img className='marginBottom' src={miteBracket} alt="Tournament Mini Mite Bracket" />
    <img className='marginBottom' src={squirtC} alt="Tournament Squirt C" />
         
   
       
 
     
    </div>
  );
};

export default Bracket;
