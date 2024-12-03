import React from 'react';
//import BracketImage from '../assets/images/TournamentConsolationBracket.png';
// import peeweeABracket from '../assets/images/2024peeweeA.png'
// import peeweeCBracket from '../assets/images/2024peeweeC.png'
// import squirtBBracket from '../assets/images/2024SquirtB.png'
import squirtBBracket from '../assets/images/squartBBracket.png'

const Bracket = () => {
  return (
    <div className='bracket-container'>

        
       {/* <img src={peeweeABracket} alt="Tournament Peewee A Bracket" />
    
       
       <img src={peeweeCBracket} alt="Tournament Peewee A Bracket" /> */}

       <img style={{marginTop: '20px', marginBottom: '20px'}} src={squirtBBracket} alt="Tournament Squirt B Bracket" />
 
     
    </div>
  );
};

export default Bracket;
