import React, { memo } from "react";
import { Col, Row } from "react-bootstrap";
import Link from "next/link";
import Image from 'next/image';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

// img
import aboutUs from "../../assets/images/inner-page/about-us.webp";
import blogGrid from "../../assets/images/inner-page/blog-grid.webp";
import blogListing from "../../assets/images/inner-page/blog-listing.webp";
import cart from "../../assets/images/inner-page/cart.webp";
import cast from "../../assets/images/inner-page/cast.webp";
import contactUs from "../../assets/images/inner-page/contact-us.webp";
import faq from "../../assets/images/inner-page/FAQ.webp";
import geners from "../../assets/images/inner-page/geners.webp";
import pricingPlan from "../../assets/images/inner-page/pricing-plan.webp";
import privacyPolicy from "../../assets/images/inner-page/privacy-policy.webp";

const InnerPages = memo(() => {
  return (
    <section className="section-padding">
      <div className="container">
        <Row className="align-items-center">
          <Col md={5}>
            <div className="title text-center text-md-start">
              <span className="sub-title">Inner Pages</span>
              <h2 className="fw-semibold text-capitalize mb-0">
                Collection of creative
                <br /> Inner Pages
              </h2>
            </div>
          </Col>
          <Col md={1}></Col>
          <Col md={6}>
            <div className="title text-center text-md-start">
              <p className="mb-0 desc pt-0">
                Streamit provides an extensive collection of pre-designed inner
                pages that are both functional and aesthetically appealing,
                making your website development process more efficient and
                versatile.
              </p>
            </div>
          </Col>
        </Row>
      </div>
      <div className="container-fluid px-0">
        <Swiper
          spaceBetween={30}
          slidesPerView={4}
          loop={true}
          autoplay={{ delay: 3000 }}
          pagination={{ clickable: true }}
          watchSlidesProgress={true}
          modules={[Navigation]}
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
            1200: { slidesPerView: 4 }
          }} >
          <SwiperSlide className="swiper-slide p-lg-0">
            <Link href="/extra/about-us">
              <Image src={aboutUs} className="img-fluid" alt="inner-page" />
            </Link>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide p-lg-0">
            <Link href="/blogs/grid/three-column">
              <Image src={blogGrid} className="img-fluid" alt="inner-page" />
            </Link>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide p-lg-0">
            <Link href="/blogs">
              <Image src={blogListing} className="img-fluid" alt="inner-page" />
            </Link>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide p-lg-0">
            <Link href="/merchandise/cart">
              <Image src={cart} className="img-fluid" alt="inner-page" />
            </Link>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide p-lg-0">
            <Link href="/cast">
              <Image src={cast} className="img-fluid" alt="inner-page" />
            </Link>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide p-lg-0">
            <Link href="/extra/contact-us">
              <Image src={contactUs} className="img-fluid" alt="inner-page" />
            </Link>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide p-lg-0">
            <Link href="/extra/faq">
              <Image src={faq} className="img-fluid" alt="inner-page" />
            </Link>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide p-lg-0">
            <Link href="/genres">
              <Image src={geners} className="img-fluid" alt="inner-page" />
            </Link>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide p-lg-0">
            <Link href="/extra/pricing-plan">
              <Image src={pricingPlan} className="img-fluid" alt="inner-page" />
            </Link>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide p-lg-0">
            <Link href="/extra/privacy-policy">
              <Image src={privacyPolicy} className="img-fluid" alt="inner-page" />
            </Link>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
});

InnerPages.displayName = "InnerPages";
export default InnerPages;
