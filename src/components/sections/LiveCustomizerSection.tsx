import { FC, Fragment, memo } from "react";

// Next-Image
import Image from "next/image";

// img
import adminDashImage from "../../assets/images/home/admin-dash.webp";
import rtlSupportImage from "../../assets/images/home/rtl-support.svg";

const features = [
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-35"
        viewBox="0 0 30 30"
        fill="none"
      >
        <path
          d="M10.8359 13.9375H5.35156C3.50348 13.9375 2 12.434 2 10.5859V5.10156C2 3.25348 3.50348 1.75 5.35156 1.75H10.8359C12.684 1.75 14.1875 3.25348 14.1875 5.10156V10.5859C14.1875 12.434 12.684 13.9375 10.8359 13.9375ZM5.35156 3.375C4.39952 3.375 3.625 4.14952 3.625 5.10156V10.5859C3.625 11.538 4.39952 12.3125 5.35156 12.3125H10.8359C11.788 12.3125 12.5625 11.538 12.5625 10.5859V5.10156C12.5625 4.14952 11.788 3.375 10.8359 3.375H5.35156Z"
          fill="white"
        />
        <path
          d="M24.6484 13.9375H19.1641C17.316 13.9375 15.8125 12.434 15.8125 10.5859V5.10156C15.8125 3.25348 17.316 1.75 19.1641 1.75H24.6484C26.4965 1.75 28 3.25348 28 5.10156V10.5859C28 12.434 26.4965 13.9375 24.6484 13.9375ZM19.1641 3.375C18.212 3.375 17.4375 4.14952 17.4375 5.10156V10.5859C17.4375 11.538 18.212 12.3125 19.1641 12.3125H24.6484C25.6005 12.3125 26.375 11.538 26.375 10.5859V5.10156C26.375 4.14952 25.6005 3.375 24.6484 3.375H19.1641Z"
          fill="white"
        />
        <path
          d="M21.9062 27.75C18.5462 27.75 15.8125 25.0163 15.8125 21.6562C15.8125 18.2962 18.5462 15.5625 21.9062 15.5625C25.2663 15.5625 28 18.2962 28 21.6562C28 25.0163 25.2663 27.75 21.9062 27.75ZM21.9062 17.1875C19.4422 17.1875 17.4375 19.1922 17.4375 21.6562C17.4375 24.1203 19.4422 26.125 21.9062 26.125C24.3703 26.125 26.375 24.1203 26.375 21.6562C26.375 19.1922 24.3703 17.1875 21.9062 17.1875Z"
          fill="white"
        />
        <path
          d="M10.8359 27.75H5.35156C3.50348 27.75 2 26.2465 2 24.3984V18.9141C2 17.066 3.50348 15.5625 5.35156 15.5625H10.8359C12.684 15.5625 14.1875 17.066 14.1875 18.9141V24.3984C14.1875 26.2465 12.684 27.75 10.8359 27.75ZM5.35156 17.1875C4.39952 17.1875 3.625 17.962 3.625 18.9141V24.3984C3.625 25.3505 4.39952 26.125 5.35156 26.125H10.8359C11.788 26.125 12.5625 25.3505 12.5625 24.3984V18.9141C12.5625 17.962 11.788 17.1875 10.8359 17.1875H5.35156Z"
          fill="white"
        />
      </svg>
    ),
    title: "Menu style",
  },
  {
    icon: (
      <img
        src="{{path}}assets/images/home/rtl-support.svg"
        className="w-35"
        alt="RTL Support"
      />
    ),
    title: "RTL Support",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-35"
        viewBox="0 0 32 32"
        fill="none"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M5.23077 4.20658C4.63601 4.20658 4.15385 4.68874 4.15385 5.2835V26.822C4.15385 27.4167 4.63601 27.8989 5.23077 27.8989H26.7692C27.364 27.8989 27.8462 27.4167 27.8462 26.822V5.2835C27.8462 4.68874 27.364 4.20658 26.7692 4.20658H5.23077ZM2 5.2835C2 3.4992 3.44647 2.05273 5.23077 2.05273H26.7692C28.5535 2.05273 30 3.4992 30 5.2835V26.822C30 28.6062 28.5535 30.0527 26.7692 30.0527H5.23077C3.44647 30.0527 2 28.6062 2 26.822V5.2835Z"
          fill="white"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M11.6922 2.05273C12.2869 2.05273 12.7691 2.53489 12.7691 3.12966V28.9758C12.7691 29.5706 12.2869 30.0527 11.6922 30.0527C11.0974 30.0527 10.6152 29.5706 10.6152 28.9758V3.12966C10.6152 2.53489 11.0974 2.05273 11.6922 2.05273Z"
          fill="white"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M5.58984 3.12966C5.58984 2.53489 6.072 2.05273 6.66677 2.05273H24.6155C25.2102 2.05273 25.6924 2.53489 25.6924 3.12966C25.6924 3.72442 25.2102 4.20658 24.6155 4.20658H6.66677C6.072 4.20658 5.58984 3.72442 5.58984 3.12966Z"
          fill="white"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M5.58984 28.9758C5.58984 28.3811 6.072 27.8989 6.66677 27.8989H24.6155C25.2102 27.8989 25.6924 28.3811 25.6924 28.9758C25.6924 29.5706 25.2102 30.0528 24.6155 30.0528H6.66677C6.072 30.0528 5.58984 29.5706 5.58984 28.9758Z"
          fill="white"
        />
      </svg>
    ),
    title: "Switch Mode",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-35"
        viewBox="0 0 32 32"
        fill="none"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M5.23077 2C3.99101 2 3 2.99101 3 4.23077V27.7692C3 29.009 3.99101 30 5.23077 30H26.7692C28.009 30 29 29.009 29 27.7692V4.23077C29 2.99101 28.009 2 26.7692 2H5.23077ZM5.23077 0C2.80147 0 1 1.80147 1 4.23077V27.7692C1 30.1985 2.80147 32 5.23077 32H26.7692C29.1985 32 31 30.1985 31 27.7692V4.23077C31 1.80147 29.1985 0 26.7692 0H5.23077Z"
          fill="white"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M17.7922 7.51765C17.3431 7.06856 16.6569 7.06856 16.2078 7.51765L7.51765 16.2078C7.06856 16.6569 7.06856 17.3431 7.51765 17.7922C7.96674 18.2413 8.65295 18.2413 9.10204 17.7922L17 9.89423L24.898 17.7922C25.347 18.2413 26.0332 18.2413 26.4823 17.7922C26.9314 17.3431 26.9314 16.6569 26.4823 16.2078L17.7922 7.51765Z"
          fill="white"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M7.84615 10.6152C8.44091 10.6152 8.92308 11.0974 8.92308 11.6922V27.3846C8.92308 27.9793 8.44091 28.4615 7.84615 28.4615C7.25139 28.4615 6.76923 27.9793 6.76923 27.3846V11.6922C6.76923 11.0974 7.25139 10.6152 7.84615 10.6152Z"
          fill="white"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M23.3846 10.6152C23.9793 10.6152 24.4615 11.0974 24.4615 11.6922V27.3846C24.4615 27.9793 23.9793 28.4615 23.3846 28.4615C22.7898 28.4615 22.3077 27.9793 22.3077 27.3846V11.6922C22.3077 11.0974 22.7898 10.6152 23.3846 10.6152Z"
          fill="white"
        />
      </svg>
    ),
    title: "Responsive",
  },
];

const LiveCustomizerSection: FC = memo(() => {
  return (
    <Fragment>
      <div className="admin-dash">
        <div className="container">
          <div className="row align-items-center g-4">
            <div className="col-lg-6 col-md-6">
              <div className="title pb-3 pb-md-5">
                <span className="sub-title">Live Customizer</span>
                <h2 className="fw-semibold text-capitalize mb-0">
                  Personalize your{" "}
                  <span className="text-primary">dashboard</span> with live
                  customizer
                </h2>
                <p className="mb-0 desc">
                  Explore Streamit's Live Customizer for improved content
                  customization
                  <br />
                  and user-friendly enhancements.
                </p>
              </div>
              <div className="row row-cols-xl-2 row-cols-md-2 row-cols-1 justify-content-center g-4">
                {features.map((feature, index) => (
                  <div className="col" key={index}>
                    <div className="d-flex align-items-center gap-3">
                      {feature.icon}
                      <h6 className="fw-500 text-capitalize mb-0">
                        {feature.title}
                      </h6>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-lg-1 d-none d-lg-block"></div>
            <div className="col-lg-5 col-md-6">
              <Image
                src={adminDashImage}
                alt="Admin Dashboard"
                className="img-fluid w-100"
              />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
});

LiveCustomizerSection.displayName = "LiveCustomizer";
export default LiveCustomizerSection;
