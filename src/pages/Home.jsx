import React from 'react'
import { Container, Button, Row, Col, Image, Accordion, Card } from 'react-bootstrap';
import ReviewsSection from "../Components/ReviewsSection"

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

import avatar1 from '../assets/image/avatar-1.svg';
import avatar2 from '../assets/image/avatar-2.svg';
import avatar3 from '../assets/image/avatar-3.svg';
import avatar4 from '../assets/image/avatar-4.svg';

import customer1 from '../assets/image/customer-1.png';
import customer2 from '../assets/image/customer-2.png';
import customer3 from '../assets/image/customer-3.png';

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
  const avatars = [avatar1, avatar4, avatar3, avatar2];
  const faqs = [
    {
      id: "0",
      question: "Why should I use SorsX?",
      answer: "Placeholder content for this accordion, which is intended to demonstrate the .accordion-flush class. This is the first item’s accordion body."
    },
    {
      id: "1",
      question: "How can AI interviews help hiring managers who are not technical experts?",
      answer: "Placeholder content for this accordion, which is intended to demonstrate the .accordion-flush class. This is the second item’s accordion body. Let’s imagine this being filled with some actual content."
    },
    {
      id: "2",
      question: "Can AI interviews really understand complex or niche industries like physics, aerospace, or engineering?",
      answer: "Placeholder content for this accordion, which is intended to demonstrate the .accordion-flush class. This is the third item’s accordion body. Nothing more exciting happening here in terms of content."
    },
    {
      id: "3",
      question: "How does AI interviewing make the recruitment process faster and more efficient?",
      answer: "Placeholder content for this accordion, which is intended to demonstrate the .accordion-flush class. This is the fourth item’s accordion body."
    }
  ];
  const stories = [
    {
      id: 1,
      image: customer1,
      text: "BEEM relies on Canny to streamline their legal operations.",
      alignment: "justify-content-md-start"
    },
    {
      id: 2,
      image: customer2,
      text: "Ableto launched in 5 countries simultaneously with Canny's help.",
      alignment: "justify-content-center"
    },
    {
      id: 3,
      image: customer3,
      text: "Overton reduced their legal costs by 45% in one year.",
      alignment: "justify-content-md-end"
    }
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

      <div className="community-section d-flex flex-column align-items-center justify-content-center py-5">
        <Container className="community-content text-center">

          <h1 className="community-title mb-5 fw-bold mx-md-0 mx-3">
            We’re building a powerful network of recruiting experts
          </h1>

          <div className="button-wrapper">
            <Button className="community-btn mb-5">
              Join our recruiter community
            </Button>
          </div>

          <div className="community-users d-flex align-items-center gap-2">
            <div className="community-avatars mb-1">
              {avatars.map((src, index) => (
                <Image
                  key={index}
                  src={src}
                  alt={`User ${index + 1}`}
                  className="community-avatar"
                  roundedCircle
                />
              ))}

              <p className="community-users-text m-0 ms-3">
                Join over 500+ users moving with SorsX
              </p>
            </div>
          </div>

        </Container>
      </div>

      <div className="faq-section d-flex flex-column align-items-center justify-content-center">
        <Container className="faq-content text-center">

          <h1 className="faq-title mb-5 fw-bold display-4">What. The. FAQ</h1>
          <div className="accordion accordion-flush mb-md-5 mb-3 mx-lg-0 mx-4 justify-content-center d-flex" id="accordionFlushExample">
            <Accordion
              flush
              className="mb-2"
              id="accordionFlushExample"
            >
              {faqs.map((faq) => (
                <Accordion.Item eventKey={faq.id} key={faq.id} className="mb-2">
                  <Accordion.Header className="fw-semibold">
                    {faq.question}
                  </Accordion.Header>
                  <Accordion.Body>
                    {faq.answer}
                  </Accordion.Body>
                </Accordion.Item>
              ))}
            </Accordion>
          </div>
          <a href="#" className="fw-bold pb-1 text-decoration-none">
            Learn More <i className="fa-solid fa-arrow-right ms-2"></i>
          </a>

        </Container>
      </div>

      <div className="card-section pb-5">
        <Container className="card-content d-flex align-items-center flex-column py-md-5">

          <h1 className="mb-5 fw-bold">Grow you knowledge with us</h1>

          <Row className="px-0 w-100 d-flex justify-content-between">
            {stories.map((story) => (
              <Col
                key={story.id}
                md={4}
                className={`d-flex ${story.alignment} justify-content-center mb-md-0 mb-3 mx-0`}
              >
                <Card
                  className="pb-0 border-0 shadow-sm"
                  style={{ width: '22rem', height: 'fit-content' }}
                >
                  <Card.Img
                    variant="top"
                    src={story.image}
                    className="img-fluid"
                    alt="Customer Story"
                  />
                  <Card.Body className="px-0">
                    <h6 className="card-text fw-normal mb-3">
                      {story.text}
                    </h6>
                    <div class="btn fw-semibold">Read Story</div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>

        </Container>
      </div>
    </>
  )
}
