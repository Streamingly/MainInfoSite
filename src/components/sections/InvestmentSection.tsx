import { FC, Fragment, memo } from "react";

// Next-Image
import Image from "next/image";

// img
import powerElite from "../../assets/images/home/power-elite.png";
import bgElite from "../../assets/images/home/bg-elite.png";
import circle from "../../assets/images/home/circle.png";

const InvestmentSection: FC = memo(() => {
  return (
    <Fragment>
      <div
        style={{
          background: `url(${bgElite}) no-repeat center center / cover`,
        }}
      >
        <div
          className="container padding-100 px-3"
          style={{
            background: `url(${circle}) no-repeat center center`,
          }}
        >
          <div className="row">
            <div className="col-12 text-center">
              <Image src={powerElite} alt="Power Elite" />
              <h3 className="mt-4">
                This project was generously funded by the University of Oulu Innovation Center, Finland
              </h3>
              <p className="text-capitalize mt-3 mb-0 font-size-18">
                We invite you to explore investment opportunities with us.
                <br />
                Please submit your proposals to{" "}
                <a href="mailto:mtalha@streamingly.net">mtalha@streamingly.net</a>.
              </p>
              <div
                className="d-flex align-items-center justify-content-center gap-2 gap-md-4 mt-0 mt-md-4 pt-3 flex-wrap flex-column flex-md-row"
              >
                <span className="font-size-28">We are raising</span>
                <h1 className="envato-text mb-0">€1 million</h1>
                <span className="font-size-28">in funding until March 2025</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
});

InvestmentSection.displayName = "Investment";
export default InvestmentSection;