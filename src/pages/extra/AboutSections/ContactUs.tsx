import { memo, Fragment } from "react";

// react-bootstrap
import { Container, Row, Col } from 'react-bootstrap'

// next link
import Link from "next/link";

// next image
import Image from "next/image"

//plugins
import CountUp from 'react-countup';

const ContactUs = memo(() => {
  return (
    <Fragment>
      <section className="section-padding" style={{ backgroundColor: "var(--bs-gray-900)" }}>
        <Container>
          <Row className="about-us-row text-center align-items-center">
            <Col lg="6" md="5">
              <div className="text-center">
                <Image width="497" height="477" src="/assets/images/pages/map.webp" className="attachment-large size-large" alt="" loading="lazy" />
              </div>
            </Col>
            <Col lg="6" md="7">
              <h2 className="text-capitalize text-start">Contact Us Here</h2>
              <p className="mb-0 text-start">Streamingly is located in Oulu, Finland and you can contact us at <Link href="mailto:info@streamingly.net">info@streamingly.net</Link> for any tech-related support and assistance. We love to hear from our Streamit users.</p>
              {/* <Row className="mt-2 iq-rtl-direction">
                <Col md="4">
                  <div className="counter">
                    <CountUp start={0} end={1} duration={1.5} enableScrollSpy className="counter-number" />
                  </div>
                  <div className="counter-title">Branch</div>
                </Col>
                <Col md="4">
                  <div className="iq-contact-list">
                    <div className="counter">
                      <CountUp className="counter-number" start={0} end={2} duration={1.5} enableScrollSpy /> <span> +</span>
                    </div>
                    <div className="counter-title">Employee</div>
                  </div>
                </Col>
                <Col md="4">
                  <div className="iq-contact-list">
                    <div className="counter">
                      <CountUp className="counter-number" start={0} end={1} duration={1.5} enableScrollSpy /> <span> +</span>
                    </div>
                    <div className="counter-title">Clients</div>
                  </div>
                </Col>
              </Row> */}
            </Col>
          </Row>
        </Container>
      </section>
    </Fragment>
  )
});

ContactUs.displayName = "ContactUs";
export default ContactUs;
