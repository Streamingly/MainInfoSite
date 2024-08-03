import { FC, Fragment, memo } from "react";

// Next-Image
import Image from "next/image";

// img
import pricingImage from "../../assets/images/home/pricing.webp";
import Link from "next/link";

const PricingSection: FC = memo(() => {
  return (
    <Fragment>
      <div className="pricing section-padding">
        <div className="container">
          <div className="row align-items-center g-4">
            <div className="col-lg-6 col-md-6">
              <div className="title pb-3 pb-md-5">
                <span className="sub-title">Pricing Plans</span>
                <h2 className="fw-semibold text-capitalize mb-0">
                  Discover our Perfect<br /> Pricing Plan for You
                </h2>
                <p className="mb-0 desc">
                  Streamit simplifies streaming with a built-in Subscription Widget for<br />
                  flexible pricing plans, ensuring convenience.
                </p>
              </div>
              <Link
                href="/extra/pricing-plan"
                className="btn btn-primary fw-500"
              >
                Get It Now
              </Link>
            </div>
            <div className="col-lg-1 d-none d-lg-block"></div>
            <div className="col-lg-5 col-md-6">
              <Image
                src={pricingImage}
                alt="Pricing Plans"
                width={800} // Adjust width as needed
                height={600} // Adjust height as needed
                className="img-fluid w-100"
              />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
});

PricingSection.displayName = "Pricing";
export default PricingSection;
