import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div class="container py-md-5 pb-5">
        <div class="row schedule-call border-bottom border-light py-5">
          <div class="col-md-9 py-md-5">
            <h1 class=" fw-semibold">Have questions? <br/>Schedule a call today.</h1>
          </div>
          <div class="col-md-3 d-flex align-items-center justify-content-end">
            <div class="btn">Schedule a call</div>
          </div>
        </div>
        <div class="row py-5 my-md-5">
          <div class="col-lg-4">
            <h1 class="display-5 fw-bold">SorsX</h1>
            <p class="fs-6 fw-medium">Start hiring with AI</p>
          </div>
          <div class="col-lg-8 d-flex flex-wrap justify-content-between">
            <div class="custom-cols mb-md-0 mb-3 d-flex">
              <a href="#">How it works</a>
              <a href="#">Why SorsX</a>
              <a href="#">Reviews</a>
            </div>
            <div class="custom-cols mb-md-0 mb-3 d-flex">
              <a href="#">Reviews</a>
              <a href="#">FAQ</a>
              <a href="#">Blog</a>
            </div>
            <div class="custom-cols mb-md-0 mb-3 d-flex">
              <a href="#">Terms & conditions</a>
              <a href="#">Privacy Policy</a>
              <a href="#">Become a Partner</a>
            </div>
            <div class="custom-cols mb-md-0 mb-3 d-flex">
              <a href="#">Twitter</a>
              <a href="#">Facebook</a>
              <a href="#">Instagram</a>
            </div>
          </div>
        </div>
        <div class="row compny-rights">
          <div class="col-md-3 mb-md-0 mb-2">&copy;2025 SorsX. All rights reserved</div>
          <div class="col-md-6 mb-md-0 mb-2 text-md-center">101 Marlow Street. #12-05 Clife Parkview. Singapore
            059020. View on Maps</div>
          <div class="col-md-3 mb-md-0 mb-2 text-md-end">Cookies Policy | Map</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;