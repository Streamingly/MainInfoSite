import { FC, Fragment, memo } from "react";

// Next-Image
import Image from "next/image";

// img
import creativeDesign from "../../assets/images/features/creative-design.svg";
import cleanCode from "../../assets/images/features/clean-code.svg";
import optimized from "../../assets/images/features/optimized.svg";
import responsive from "../../assets/images/features/responsive.svg";
import documented from "../../assets/images/features/documented.svg";
import googleFont from "../../assets/images/features/goggle-font.svg";
import rtlSupport from "../../assets/images/features/RTL-support.svg";
import bootstrap from "../../assets/images/features/bootstrap.svg";
import crossBrowser from "../../assets/images/features/cross-browser.svg";
import colorCustomizer from "../../assets/images/features/colour-customizer.svg";
import w3cValidation from "../../assets/images/features/w3c-validation.svg";
import support from "../../assets/images/features/24-7-support.svg";

const features = [
  { src: creativeDesign, title: "Creative Design" },
  { src: cleanCode, title: "Clean Code" },
  { src: optimized, title: "Optimized" },
  { src: responsive, title: "Responsive" },
  { src: documented, title: "Documented" },
  { src: googleFont, title: "Google Font" },
  { src: rtlSupport, title: "RTL Support" },
  { src: bootstrap, title: "Bootstrap 5" },
  { src: crossBrowser, title: "Cross Browser" },
  { src: colorCustomizer, title: "Color Customizer" },
  { src: w3cValidation, title: "W3C Validation" },
  { src: support, title: "24/7 Support" },
];

const MainFeaturesSection: FC = memo(() => {
  return (
    <Fragment>
      <div className=" pb-0">
        <div className="container">
          <div className="title text-center">
            <span className="sub-title">Features</span>
            <h2 className="fw-semibold text-capitalize mb-0">Our Amazing Features</h2>
            <p className="mb-0 desc">
              Streamit boasts top-tier features, rivalling Netflix and Amazon Prime Video,
              <br />
              setting it apart as the ultimate HTML platform.
            </p>
          </div>
          <div className="row row-cols-xl-6 row-cols-md-3 row-cols-2 justify-content-center g-4">
            {features.map((feature, index) => (
              <div className="col" key={index}>
                <div className="default-box text-center">
                  <Image
                    src={feature.src}
                    alt={feature.title}
                    className="img-fluid image-size-icon"
                  />
                  <h6 className="heading mb-0 fw-500 text-capitalize">{feature.title}</h6>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
});

MainFeaturesSection.displayName = "Features";
export default MainFeaturesSection;

