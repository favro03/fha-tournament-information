import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  const currentYear = new Date().getFullYear(); // Get the current year

  return (
    <Container>
      <Row>
        <Col className="text-center py-3"> {/* Corrected class name */}
          <p>Faribault Hockey Association &copy; {currentYear}</p>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
