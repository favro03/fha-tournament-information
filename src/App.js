import React, { useRef } from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeScreen from './screens/HomeScreen';

const App = () => {
  const bracketRef = useRef(null);
  const hotelsRef = useRef(null);
  const restaurantsRef = useRef(null);
  const rulesRef = useRef(null);

  const scrollToSection = (ref) => {
    if (ref.current) {
      const elementPosition = ref.current.getBoundingClientRect().top + window.scrollY;

      // Adjust the offset based on screen width
      let offset = 85; // Default offset for larger screens
      const screenWidth = window.innerWidth;

      if (screenWidth >= 390 && screenWidth < 430) {
        offset = 250; // Offset for screens between 390px and 430px
      } else if (screenWidth < 390) {
        offset = 250; // For smaller screens, you might want a different offset
      }

      const offsetPosition = elementPosition - offset;

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
              scrollToSection={scrollToSection}
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
