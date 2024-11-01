import React, { useRef} from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header'
import Footer from './components/Footer'
import HomeScreen from './screens/HomeScreen';

const App = () => {
  
  
  const bracketRef = useRef(null);
  const hotelsRef = useRef(null);
  const restaurantsRef = useRef(null);
  const rulesRef = useRef(null);
  

  const scrollToSection = (ref) => {
    if (ref.current) {
      const elementPosition = ref.current.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - 85;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <Router>
      <Header 
        scrollToSection={scrollToSection} 
        bracketRef={bracketRef}
        rulesRef={rulesRef} 
        hotelsRef={hotelsRef} 
        restaurantsRef={restaurantsRef} 
       
      />
      <Routes>
        <Route 
          path="/" 
          element={
            <HomeScreen 
              scrollToSection={scrollToSection} // Pass the function here
              bracketRef={bracketRef}
              rulesRef={rulesRef} 
              hotelsRef={hotelsRef} 
              restaurantsRef={restaurantsRef} 
            /> 
          } 
        />
        {/* other routes */}
      </Routes>
  <Footer />
    </Router>
  );
};

export default App;
