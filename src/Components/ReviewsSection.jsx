import React, { useState } from 'react';
import { Container, Row, Col, Card, Image } from 'react-bootstrap';

// Images import karein
import waditekLogo from '../assets/image/Waditek.png';
import framerLogo from '../assets/image/framer.png';
import shrmLogo from '../assets/image/SHRM.png';

const ReviewsSection = () => {
  // State for the left side text content
  const [selectedCard, setSelectedCard] = useState('card1');

  const reviewsData = {
    card1: { id: 1, name: "Waditek" },
    card2: { id: 2, name: "Framer" },
    card3: { id: 3, name: "SHRM" }
  };

  return (
    <div className="reviews-wrapper">
      {/* Hidden Radio Buttons for CSS Logic */}
      <input type="radio" name="card" id="card1" checked={selectedCard === 'card1'} onChange={() => setSelectedCard('card1')} hidden />
      <input type="radio" name="card" id="card2" checked={selectedCard === 'card2'} onChange={() => setSelectedCard('card2')} hidden />
      <input type="radio" name="card" id="card3" checked={selectedCard === 'card3'} onChange={() => setSelectedCard('card3')} hidden />

      <div className="reviews-section py-5">
        <Container className="pt-5">
          <h1 className="text-center display-4 fw-medium mb-md-5 text-white">Reviews</h1>
          <Row className="align-items-center mt-md-5">
            
            {/* Left Side: Dynamic Content */}
            <Col md={5} className="carousel-left ps-5">
              <div className="review-step mb-3 fw-medium">{reviewsData[selectedCard].id}</div>
              <h2 className="review-company fw-medium mb-4 text-white">{reviewsData[selectedCard].name}</h2>
              
              <div className="review-nav d-flex mb-4">
                {/* Navigation sets show/hide based on CSS checked state */}
                <div className="nav-set card1-nav gap-3">
                  <label htmlFor="card3" className="review-nav-btn prev btn"><i className="fa-solid fa-arrow-left"></i></label>
                  <label htmlFor="card2" className="review-nav-btn next btn"><i className="fa-solid fa-arrow-right"></i></label>
                </div>
                <div className="nav-set card2-nav gap-3">
                  <label htmlFor="card1" className="review-nav-btn prev btn"><i className="fa-solid fa-arrow-left"></i></label>
                  <label htmlFor="card3" className="review-nav-btn next btn"><i className="fa-solid fa-arrow-right"></i></label>
                </div>
                <div className="nav-set card3-nav gap-3">
                  <label htmlFor="card2" className="review-nav-btn prev btn"><i className="fa-solid fa-arrow-left"></i></label>
                  <label htmlFor="card1" className="review-nav-btn next btn"><i className="fa-solid fa-arrow-right"></i></label>
                </div>
              </div>
            </Col>

            {/* Right Side: Cards */}
            <Col md={7} className="carousel-right d-flex justify-content-end position-relative" style={{ minHeight: '400px' }}>
              
              <Card className="review-card px-4 py-5 card1 mx-auto">
                <div className="testimonial-index mb-md-4 mb-2">1/3</div>
                <div className="testimonial-text">
                  “SorsX completely transformed our Salesforce <br className="d-lg-flex d-none"/>hiring process,
                            saving WadiTek over $20K by<br className="d-lg-flex d-none"/>
                            streamlining interviews and quickly identifying <br className="d-lg-flex d-none"/>qualified
                            candidates. It’s now essential<br className="d-lg-flex d-none"/>
                            to our hiring strategy.”
                </div>
                <div className="testimonial-logo d-flex justify-content-end">
                  <Image src={waditekLogo} alt="Waditek" fluid />
                </div>
              </Card>

              <Card className="review-card px-4 py-5 card2 mx-auto">
                <div className="testimonial-index mb-md-4 mb-2">2/3</div>
                <div className="testimonial-text">
                  “SorsX helped our talent pipeline<br className="d-lg-flex d-none"/> scale faster and smarter.
                            We saved hundreds<br className="d-lg-flex d-none"/> of hours by automating pre-screening
                            and <br className="d-lg-flex d-none"/>scheduling. Highly recommended.”
                </div>
                <div className="testimonial-logo d-flex justify-content-end">
                  <Image src={framerLogo} alt="Framer" fluid />
                </div>
              </Card>

              <Card className="review-card px-4 py-5 card3 mx-auto">
                <div className="testimonial-index mb-md-4 mb-2">3/3</div>
                <div className="testimonial-text">
                  “Thanks to SorsX, our recruitment<br className="d-lg-flex d-none"/> process is now efficient,
                            data-driven,<br className="d-lg-flex d-none"/> and optimized. We hire the best talent<br
                                className="d-lg-flex d-none"/>
                            in record time.”
                </div>
                <div className="testimonial-logo d-flex justify-content-end">
                  <Image src={shrmLogo} alt="SHRM" fluid />
                </div>
              </Card>

            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default ReviewsSection;