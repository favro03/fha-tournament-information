import React from 'react';
import BracketImage from '../assets/images/TournamentConsolationBracket.png';

const Bracket = () => {
  return (
    <div className='bracket-container'>
      <img src={BracketImage} alt="Tournament Consolation Bracket" />
    </div>
  );
};

export default Bracket;
