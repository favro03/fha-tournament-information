import React from 'react';
import U15ABracket from '../assets/images/U15A.png'
import U15BBracket from '../assets/images/U15B.png'
import U12B1Bracket from '../assets/images/U12B1.png'
import U12B2Bracket from '../assets/images/U12B2.png'


const Bracket = () => {
  return (
    <div className='bracket-container'>
      <h2 style={{ marginTop: '30px', fontWeight: 'bold' }}>Brackets</h2>


          
      <img className='marginBottom' src={U15ABracket} alt="Tournament U15A Bracket" />
      <img className='marginBottom' src={U15BBracket} alt="Tournament U15B Bracket" />
      <img className='marginBottom' src={U12B1Bracket} alt="Tournament U12B1 Bracket" /> 
      <img className='marginBottom' src={U12B2Bracket} alt="Tournament U12B2 Bracket" />
         
   
       
 
     
    </div>
  );
};

export default Bracket;
