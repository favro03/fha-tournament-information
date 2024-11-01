import { Navbar, Nav, Container } from 'react-bootstrap';
import { useState } from 'react';
import logo from '../assets/images/fhaLogo.png';

const Header = ({ scrollToSection, bracketRef, rulesRef, hotelsRef, restaurantsRef }) => {
  const [expanded, setExpanded] = useState(false);

  const handleNavClick = (ref) => {
    console.log(`Navigating to: ${ref.current?.id || 'Unknown'}`); // Log the ref id or 'Unknown'
    scrollToSection(ref);
    setExpanded(false); // Close the dropdown
  };

  return (
    <header className='header-style'>
      <Navbar variant='dark' expand="lg" collapseOnSelect expanded={expanded} onToggle={() => setExpanded(!expanded)}>
        <Container className='header-style'>
          <Navbar.Brand href='/'>
            <img 
              src={logo} 
              alt='Recipe Rolodex' 
              className='header-style' 
              style={{ marginLeft: '70px', width: '60px', height: '60px' }} 
            />
            <span
              className='header-name'
              style={{
                width: '60px',
                height: '60px',
                color: 'white',
                fontSize: '20px',
                fontWeight: 'bold',
                textShadow: '4px 4px 8px rgba(0, 0, 0, 0.5)',
              }}
            >
              FHA Tournament
            </span>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls='basic-navbar-nav' onClick={() => setExpanded(!expanded)} />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ms-auto'>
              <Nav.Link className='ms-auto' onClick={() => handleNavClick(bracketRef)} style={{ color: "white", cursor: "pointer" }}>
                Bracket
              </Nav.Link>
              <Nav.Link className='ms-auto' onClick={() => handleNavClick(rulesRef)} style={{ color: "white", cursor: "pointer" }}>
                Tournament Rules
              </Nav.Link>
              <Nav.Link className='ms-auto' onClick={() => handleNavClick(hotelsRef)} style={{ color: "white", cursor: "pointer" }}>
                Hotels
              </Nav.Link>
              <Nav.Link className='ms-auto' onClick={() => handleNavClick(restaurantsRef)} style={{ color: "white", cursor: "pointer" }}>
                Restaurants
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
