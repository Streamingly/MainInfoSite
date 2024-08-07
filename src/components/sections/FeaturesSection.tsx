import { FC, Fragment, memo } from "react";

// Next-Image
import Image from "next/image";

// img
import GenresImg from "../../assets/images/feature-home/genres.webp";
import RtlImg from "../../assets/images/feature-home/rtl.webp";
import TrailerImg from "../../assets/images/feature-home/trailer.webp";
import RateImg from "../../assets/images/feature-home/rate.webp";
import WidgetImg from "../../assets/images/feature-home/widget.webp";
import RestrictedImg from "../../assets/images/feature-home/restricted.webp";

const FeaturesSection: FC = memo(() => {
  return (
    <Fragment>
      <div id="features" className="section-padding">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-5">
              <div className="title text-center text-md-start">
                <span className="sub-title">Features</span>
                <h2 className="fw-semibold text-capitalize mb-0">
                  Our Amazing Features
                </h2>
              </div>
            </div>
            <div className="col-md-1"></div>
            <div className="col-md-6">
              <div className="title text-center text-md-start">
                <p className="mb-0 desc pt-0">
                  Streamingly boasts top-tier features, experience Netflix and Amazon Prime thrill <br></br>
                  on your own website
                </p>
              </div>
            </div>
          </div>
          <div className="row row-cols-xl-3 row-cols-md-2 row-cols-1 g-4">
            <div className="col">
              <div className="feature-box position-relative">
                <Image
                  src={RtlImg}
                  alt="Streamit with RTL Compatibility"
                  className="img img-fluid w-100"
                />
                <h6 className="heading font-size-18 mb-0 text-center fw-500 letter-spacing-one text-capitalize">
                  Easy Customization of Dashboards
                </h6>
              </div>
            </div>
            <div className="col">
              <div className="feature-box position-relative">
                <Image
                  src={TrailerImg}
                  alt="Explore Our Trailer Options"
                  className="img-fluid w-100"
                />
                <h6 className="heading font-size-18 mb-0 text-center fw-500 letter-spacing-one text-capitalize">
                  HLS Media Streaming Experience
                </h6>
              </div>
            </div>
            <div className="col">
              <div className="feature-box position-relative">
                <Image
                  src={RateImg}
                  alt="Rate & Review Streamit's Content"
                  className="img-fluid w-100"
                />
                <h6 className="heading font-size-18 mb-0 text-center fw-500 letter-spacing-one text-capitalize">
                  Support upto 8k Resolution
                </h6>
              </div>
            </div>
            <div className="col">
              <div className="feature-box position-relative">
                <Image
                  src={WidgetImg}
                  alt="Over 15+ Widgets Available"
                  className="img-fluid w-100"
                />
                <h6 className="heading font-size-18 mb-0 text-center fw-500 letter-spacing-one text-capitalize">
                  High Bitrate to give ultimate experience
                </h6>
              </div>
            </div>
            <div className="col">
              <div className="feature-box position-relative">
                <Image
                  src={GenresImg}
                  alt="Diverse Movie Genres and Categories"
                  className="img-fluid w-100"
                />
                <h6 className="heading font-size-18 mb-0 text-center fw-500 letter-spacing-one text-capitalize">
                  Admin Panel to Upload and Control
                </h6>
              </div>
            </div>
            <div className="col">
              <div className="feature-box position-relative">
                <Image
                  src={RestrictedImg}
                  alt="Restricted Pages or Content View"
                  className="img-fluid w-100"
                />
                <h6 className="heading font-size-18 mb-0 text-center fw-500 letter-spacing-one text-capitalize">
                  Content Monitoring and analysis
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
});

FeaturesSection.displayName = "Features";
export default FeaturesSection;
