import React from 'react';

import "../assets/styles/style.css";

// Image Imports
import waditekLogo from '../assets/image/Waditek.png';
import framerLogo from '../assets/image/framer.png';
import shrmLogo from '../assets/image/SHRM.png';


const ReviewsSection = () => {
  return (
    <>
    <input type="radio" name="card" id="card1" checked />
    <input type="radio" name="card" id="card2" />
    <input type="radio" name="card" id="card3" />
    <div className="reviews-section py-5">
        <div className="container pt-5">
            <h1 className="text-center display-4 fw-medium mb-md-5 text-white">Reviews</h1>
            <div className="row align-items-center mt-md-5">
                <div className="carousel-left col-md-5 ps-5">
                    <div className="review-step mb-3 fw-medium">1</div>
                    <h2 className="review-company fw-medium mb-4 text-white">Waditek</h2>
                    <div className="reviewer-name mb-2 text-white"></div>
                    <div className="reviewer-role mb-5"></div>

                    <div className="review-nav d-flex mb-4">
                        <div className="nav-set card1-nav gap-3">
                            <label htmlFor="card3" className="review-nav-btn prev btn"><i
                                    className="fa-solid fa-arrow-left"></i></label>
                            <label htmlFor="card2" className="review-nav-btn next btn"><i
                                    className="fa-solid fa-arrow-right"></i></label>
                        </div>
                        <div className="nav-set card2-nav gap-3">
                            <label htmlFor="card1" className="review-nav-btn prev btn"><i
                                    className="fa-solid fa-arrow-left"></i></label>
                            <label htmlFor="card3" className="review-nav-btn next btn"><i
                                    className="fa-solid fa-arrow-right"></i></label>
                        </div>
                        <div className="nav-set card3-nav gap-3">
                            <label htmlFor="card2" className="review-nav-btn prev btn"><i
                                    className="fa-solid fa-arrow-left"></i></label>
                            <label htmlFor="card1" className="review-nav-btn next btn"><i
                                    className="fa-solid fa-arrow-right"></i></label>
                        </div>
                    </div>
                </div>

                <div className="carousel-right col-md-7 d-flex justify-content-end">
                    <div className="card review-card px-4 py-5 card1 mx-auto">
                        <div className="testimonial-index mb-md-4 mb-2">1/3</div>
                        <div className="testimonial-text">
                            “SorsX completely transformed our Salesforce <br className="d-lg-flex d-none"/>hiring process,
                            saving WadiTek over $20K by<br className="d-lg-flex d-none"/>
                            streamlining interviews and quickly identifying <br className="d-lg-flex d-none"/>qualified
                            candidates. It’s now essential<br className="d-lg-flex d-none"/>
                            to our hiring strategy.”
                        </div>
                        <div className="testimonial-logo d-flex justify-content-end">
                            <img src={waditekLogo} alt="Waditek Logo" className="img-fluid" />
                        </div>
                    </div>

                    <div className="card review-card px-4 py-5 card2 mx-auto">
                        <div className="testimonial-index mb-md-4 mb-2">2/3</div>
                        <div className="testimonial-text">
                            “SorsX helped our talent pipeline<br className="d-lg-flex d-none"/> scale faster and smarter.
                            We saved hundreds<br className="d-lg-flex d-none"/> of hours by automating pre-screening
                            and <br className="d-lg-flex d-none"/>scheduling. Highly recommended.”
                        </div>
                        <div className="testimonial-logo d-flex justify-content-end">
                            <img src={framerLogo} alt="Framer Logo" className="img-fluid" />
                        </div>
                    </div>
                    <div className="card review-card px-4 py-5 card3 mx-auto">
                        <div className="testimonial-index mb-md-4 mb-2">3/3</div>
                        <div className="testimonial-text">
                            “Thanks to SorsX, our recruitment<br className="d-lg-flex d-none"/> process is now efficient,
                            data-driven,<br className="d-lg-flex d-none"/> and optimized. We hire the best talent<br
                                className="d-lg-flex d-none"/>
                            in record time.”
                        </div>
                        <div className="testimonial-logo d-flex justify-content-end">
                            <img src={shrmLogo} alt="SHRM Logo" className ="img-fluid" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  );
};

export default ReviewsSection;