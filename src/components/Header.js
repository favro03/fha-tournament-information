import { Navbar, Nav, Container } from 'react-bootstrap';
import logo from '../assets/images/fhaLogo.png';


const Header = ({ scrollToSection, bracketRef,rulesRef, hotelsRef, restaurantsRef }) => {

  
  return (
    <header className='header-style'>
      <Navbar variant='dark' expand="lg" collapseOnSelect>
        <Container className='header-style'>
          <Navbar.Brand href='/'>
            <img 
              src={logo} 
              alt='Recipe Rolodex' 
              className='header-style' 
              style={{ marginLeft: '70px', width: '60px', height: '60px' }} 
            />
            <span
              style={{
                width: '60px',
                height: '60px',
                color: 'white',
                fontSize: '20px',
                fontWeight: 'bold',
                textShadow: '4px 4px 8px rgba(0, 0, 0, 0.5)',
              }}
            >
              FHA Tournament Information
            </span>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ms-auto'>
            <Nav.Link className='ms-auto' onClick={() => scrollToSection(bracketRef)} style={{ color: "white", cursor: "pointer" }}>
              Bracket
              </Nav.Link>
              <Nav.Link className='ms-auto' onClick={() => scrollToSection(rulesRef)} style={{ color: "white", cursor: "pointer" }}>
              Tournament Rules
              </Nav.Link>
              <Nav.Link className='ms-auto' onClick={() => scrollToSection(hotelsRef)} style={{ color: "white", cursor: "pointer" }}>
                Hotels
              </Nav.Link>
              <Nav.Link className='ms-auto' onClick={() => scrollToSection(restaurantsRef)} style={{ color: "white", cursor: "pointer" }}>
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
