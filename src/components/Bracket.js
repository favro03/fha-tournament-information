//import pweewee from '../assets/images/pweeweeBFrostTournament.png'
import squirt from '../assets/images/squirtBTourny.png'




  

const Bracket = () => {
  return (
    <div className='bracket-container'>
      <h2 style={{ marginTop: '30px', fontWeight: 'bold' }}>Brackets</h2>
      {/* <h3>No Upcomming Tournaments</h3> */}

    <img className='marginBottom' src={squirt} alt="Tournament Pweewee B Frost" /> 
         
    </div>
  );
};

export default Bracket;
