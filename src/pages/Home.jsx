import React from 'react'
import { Container, Button, Row, Col, Image } from 'react-bootstrap';
import ReviewsSection from "./ReviewsSection"

// Image Imports
import waditekLogo from '../assets/image/Waditek.png';
import framerLogo from '../assets/image/framer.png';
import shrmLogo from '../assets/image/SHRM.png';

import stepsNumber from '../assets/image/steps_number.png';
import step1Img from '../assets/image/step-1.png';
import step2Img from '../assets/image/step-2.png';
import step3Img from '../assets/image/step-3.png';
import step4Img from '../assets/image/step-4.png';
import zigzagBg from '../assets/image/zigzag.png';

import meetingImg from '../assets/image/meeting.png';

export default function Home() {
  const logos = [
    waditekLogo, framerLogo, shrmLogo,
    waditekLogo, framerLogo, shrmLogo,
    waditekLogo, framerLogo, shrmLogo
  ];
  const steps = [
    {
      id: 1,
      label: "STEP 1",
      highlight: "Enter core details",
      body: <>
        and SorsX instantly builds<br />
        interview questions<br />
        tailored to your role.
      </>,
      image: step1Img,
      color: "#F6E96B",
      rotate: "-2deg",
    },
    {
      id: 2,
      label: "STEP 2",
      highlight: "Invite candidates",
      body: <>
        and interviews happen<br /> seamlessly on their<br /> schedule
      </>,
      image: step2Img,
      color: "#57EBA6",
      rotate: "2deg",
      hasZigzag: true,
    },
    {
      id: 3,
      label: "STEP 3",
      highlight: "Assess automatically",
      body: <>
        with dynamic<br /> interviews tailored to<br /> each candidate.
      </>,
      image: step3Img,
      color: "#EB579F",
      rotate: "-2deg",
      textColor: "text-white",
    },
    {
      id: 4,
      label: "STEP 4",
      highlight: "Review instantly",
      body: <>
        with clear interview<br /> results - all analysis<br /> done for you.
      </>,
      image: step4Img,
      color: "#57DAEB",
      rotate: "-1deg",
    },
  ];
  return (
    <>
      <div className="container-2 text-decoration-none">
        <Container>
          {/* Using a semantic section tag with Bootstrap alignment classes */}
          <section className="text-white justify-content-center text-center">

            <h1 className="fw-semibold display-6 mb-md-4 pt-md-5 lh-base">
              <span>AI Interview</span> for every candidate
              <br />
              no matter the role
            </h1>

            <p className="lead mb-md-4 mt-md-2">
              Interviewing is tough. We've lived it. Let SorsX do the heavy lifting.
            </p>

            <Button
              size="lg"
              className="px-md-4 my-md-4 text-white mt-md-2 text-white">
              Get Started
            </Button>

          </section>
        </Container>
      </div>

      <div className="container-3 py-md-5 py-4">
        <Container className="text-center py-md-5">
          <p>
            Join companies that already hire smarter with <span className="fw-bold">SorsX</span>
          </p>

          <Row className="justify-content-center align-items-center g-3">
            {logos.map((logo, index) => (
              <Col
                key={index}
                xs={4}
                md={1}
                className="d-flex justify-content-center"
              >
                <Image
                  src={logo}
                  alt="Partner Logo"
                  fluid
                  className="align-self-center"
                />
              </Col>
            ))}
          </Row>
        </Container>
      </div>

      <Container fluid className="container-4 p-0">
        <div className="outer-div pt-md-3 pt-5">
          {/* Header Section */}
          <Container className="text-center py-md-5 px-md-2 px-4">
            <h1 className="fw-semibold">
              You are <Image src={stepsNumber} fluid className="text-img" alt="steps" /> steps away from creating your AI interview
            </h1>
          </Container>

          {/* Steps Mapping */}
          <Container fluid>
            {steps.map((step, index) => {
              const isEven = (index + 1) % 2 === 0;

              return (
                <Row key={step.id} className="align-items-center">
                  {/* Text Column */}
                  <Col
                    md={6}
                    className={`custom-col-6 d-flex flex-column ${isEven ? 'order-1 order-md-2' : ''}`}
                  >
                    <div className="mx-auto">
                      <p className="step-label mb-3">{step.label}</p>
                      <h2 className='mx-auto'>
                        <span
                          className={`highlight ${step.textColor || ''}`}
                          style={{
                            background: step.color,
                            rotate: step.rotate,
                            display: 'inline-block',
                            padding: '0 10px'
                          }}
                        >
                          {step.highlight}
                        </span>
                        <br />
                        {step.body}
                      </h2>
                    </div>
                  </Col>

                  {/* Image Column */}
                  <Col
                    md={6}
                    className={`custom-col-6 color ${isEven ? 'order-2 order-md-1' : ''}`}
                    style={step.hasZigzag ? { backgroundImage: `url(${zigzagBg})`, backgroundRepeat: 'no-repeat' } : {}}
                  >
                    <Image src={step.image} alt={step.label} fluid className={step.id === 4 ? "custom-size-img" : ""} />
                  </Col>
                </Row>
              );
            })}
          </Container>
        </div>
      </Container>

      <div className="container-5 border-bottom border-light pt-5">
        <Container className="d-flex flex-column align-items-center pt-4">

          <h1 className="mb-2 fw-semibold">
            <span>Try It</span> Today!
          </h1>

          <p className="mb-md-4 mb-3 fw-medium">
            Join us and create your first AI Interview today
          </p>

          <Button
            variant="primary" // Or your custom class
            className="fw-medium mb-md-5 mb-3"
          >
            Get Started
          </Button>

          <Image
            src={meetingImg}
            alt="Meeting Illustration"
            fluid
          />

        </Container>
      </div>

      <ReviewsSection />
    </>
  )
}
