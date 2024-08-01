import React, { Fragment } from "react";
import SwiperCore, { Navigation, Thumbs } from "swiper";
SwiperCore.use([Navigation, Thumbs]);

const StreamHero = () => {

  return (
    <Fragment>
      <div className="p-top-h-height height-auto-100 position-relative">
        <div className="overlay"></div>
        <video autoPlay muted loop playsInline className="background-video">
          <source
            src="https://streamingly.s3.us-east-005.backblazeb2.com/HeroSectionVideo/Timeline+1.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        <div className="container-fluid h-100">
          <div className="d-flex flex-column justify-content-between align-items-center h-100">
            <div className="text-center mb-3 mb-md-0 mt-3 pt-0 pt-md-3 mt-md-5 z-1">
              <i className="mb-0 text-capitalize text-white font-size-18 banner-subtitle d-inline-block">
                Next Generation Video Dashboards
              </i>
              <h1 className="texture-text banner-big-font text-capitalize mt-2 mb-4 gradient-text">
                Streamingly your Easy-to-Embed <br /> Video{" "}
                <i className="fw-normal">Dashboard </i> creator
              </h1>
              <p className="text-capitalize text-center text-white fw-bold font-size-20 mb-2">
                Choose and customize video dashboards from various templates
              </p>
              <p className="text-capitalize text-center text-white fw-semibold mb-0">
                upload your videos, and easily embed your tailored dashboard
                into your website or other platforms
              </p>
            </div>
            <ul className="banner-list list-inline text-center d-flex flex-wrap justify-content-center pb-5 z-1 flex-column flex-md-row mb-0">
              <li className="text-capitalize d-inline-flex align-items-center gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="17"
                  height="16"
                  viewBox="0 0 17 16"
                  fill="none"
                >
                  <g clipPath="url(#clip0_1233_1832)">
                    <path
                      d="M15.273 7.32367V8.00003C15.2721 9.56834 14.7643 11.0943 13.8252 12.3505C12.8862 13.6066 11.5663 14.5255 10.0623 14.9701C8.5584 15.4148 6.951 15.3614 5.47988 14.8179C4.00876 14.2744 2.75274 13.2699 1.89915 11.9543C1.04555 10.6386 0.640114 9.08226 0.743304 7.51735C0.846494 5.95245 1.45278 4.46282 2.47174 3.27063C3.4907 2.07845 4.86775 1.24759 6.39749 0.901959C7.92724 0.556333 9.52773 0.714461 10.9603 1.35276"
                      stroke="#E50914"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M16.0002 1.45459L8.00018 9.45459L5.81836 7.27277"
                      stroke="#E50914"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1233_1832">
                      <rect width="16.7273" height="16" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <span>easy Customization</span>
              </li>
              <li className="text-capitalize d-inline-flex align-items-center gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="17"
                  height="16"
                  viewBox="0 0 17 16"
                  fill="none"
                >
                  <g clipPath="url(#clip0_1233_1832)">
                    <path
                      d="M15.273 7.32367V8.00003C15.2721 9.56834 14.7643 11.0943 13.8252 12.3505C12.8862 13.6066 11.5663 14.5255 10.0623 14.9701C8.5584 15.4148 6.951 15.3614 5.47988 14.8179C4.00876 14.2744 2.75274 13.2699 1.89915 11.9543C1.04555 10.6386 0.640114 9.08226 0.743304 7.51735C0.846494 5.95245 1.45278 4.46282 2.47174 3.27063C3.4907 2.07845 4.86775 1.24759 6.39749 0.901959C7.92724 0.556333 9.52773 0.714461 10.9603 1.35276"
                      stroke="#E50914"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M16.0002 1.45459L8.00018 9.45459L5.81836 7.27277"
                      stroke="#E50914"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1233_1832">
                      <rect width="16.7273" height="16" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <span>No coding required</span>
              </li>
              <li className="text-capitalize d-inline-flex align-items-center gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="17"
                  height="16"
                  viewBox="0 0 17 16"
                  fill="none"
                >
                  <g clipPath="url(#clip0_1233_1832)">
                    <path
                      d="M15.273 7.32367V8.00003C15.2721 9.56834 14.7643 11.0943 13.8252 12.3505C12.8862 13.6066 11.5663 14.5255 10.0623 14.9701C8.5584 15.4148 6.951 15.3614 5.47988 14.8179C4.00876 14.2744 2.75274 13.2699 1.89915 11.9543C1.04555 10.6386 0.640114 9.08226 0.743304 7.51735C0.846494 5.95245 1.45278 4.46282 2.47174 3.27063C3.4907 2.07845 4.86775 1.24759 6.39749 0.901959C7.92724 0.556333 9.52773 0.714461 10.9603 1.35276"
                      stroke="#E50914"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M16.0002 1.45459L8.00018 9.45459L5.81836 7.27277"
                      stroke="#E50914"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1233_1832">
                      <rect width="16.7273" height="16" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <span>High impact visuals</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default StreamHero;
