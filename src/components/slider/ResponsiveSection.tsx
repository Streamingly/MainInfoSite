import { FC, Fragment, memo } from "react";

// Next-Image
import Image from "next/image";

// img
import responsiveImage from "../../assets/images/home/responsive.webp";

const ResponsiveSection: FC = memo(() => {
  return (
    <Fragment>
      <div className="section-padding">
        <div className="container">
          <div className="row align-items-center g-4 flex-column-reverse flex-column flex-lg-row">
            <div className="col-lg-6 pe-xl-5">
              <Image
                src={responsiveImage}
                alt="Responsive"
                width={800} // Adjust width as needed
                height={600} // Adjust height as needed
                className="img-fluid w-100"
              />
            </div>
            <div className="col-lg-6 ps-xl-5">
              <div className="title pb-0">
                <span className="sub-title">Responsive</span>
                <h2 className="fw-semibold text-capitalize mb-0">
                  Maximizing Compatibility for All Screen Sizes
                </h2>
                <p className="mb-0 desc">
                  You can ensure that your website or application looks great and functions flawlessly
                  on any device, providing a better user experience for your visitors or customers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
});

ResponsiveSection.displayName = "Responsive";
export default ResponsiveSection;
