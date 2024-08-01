import { FC, Fragment, memo } from "react";
import Image from "next/image";

// Image URLs
const reactImg = "https://streamingly.s3.us-east-005.backblazeb2.com/Images/SupportedTechs/react.png";
const nextImg = "https://streamingly.s3.us-east-005.backblazeb2.com/Images/SupportedTechs/NEXT.png";
const angularImg = "https://streamingly.s3.us-east-005.backblazeb2.com/Images/SupportedTechs/angular-removebg-preview.png";
const wordpressImg = "https://streamingly.s3.us-east-005.backblazeb2.com/Images/SupportedTechs/simplified-removebg-preview.png";
const shopifyImg = "https://streamingly.s3.us-east-005.backblazeb2.com/Images/SupportedTechs/shopiify.png";

const PluginsSection: FC = memo(() => {
  return (
    <Fragment>
      <div className="section-padding">
        <div className="container-fluid">
          <div className="title text-center">
            <span className="sub-title">Powerful Plugins</span>
            <h2 className="fw-semibold text-capitalize mb-0">Extensive Support Available</h2>
            <p className="desc mb-0 text-capitalize">
              Seamless Integration and Expert Assistance for a Wide Range of Platforms, 
              <br />
              Follow Documentation for easy setup Or reach to our support team in case of any query
            </p>
          </div>
          <div className="row row-cols-xl-5 row-cols-md-3 row-cols-sm-2 row-cols-2 g-4 justify-content-center">
            <div className="col">
              <div className="default-box bg-secondary text-center">
                <Image src={reactImg} width={80} height={80} className="img-fluid w-100" alt="React" />
                <h6 className="heading mb-0 fw-500 text-capitalize">React</h6>
              </div>
            </div>
            <div className="col">
              <div className="default-box bg-secondary text-center">
                <Image src={nextImg} width={80} height={80} className="img-fluid w-100" alt="Next" />
                <h6 className="heading mb-0 fw-500 text-capitalize">Next</h6>
              </div>
            </div>
            <div className="col">
              <div className="default-box bg-secondary text-center">
                <Image src={angularImg} width={80} height={80} className="img-fluid w-100" alt="Angular" />
                <h6 className="heading mb-0 fw-500 text-capitalize">Angular</h6>
              </div>
            </div>
            <div className="col">
              <div className="default-box bg-secondary text-center">
                <Image src={wordpressImg} width={80} height={80} className="img-fluid w-100" alt="Wordpress" />
                <h6 className="heading mb-0 fw-500 text-capitalize">Wordpress</h6>
              </div>
            </div>
            <div className="col">
              <div className="default-box bg-secondary text-center">
                <Image src={shopifyImg} width={80} height={80} className="img-fluid w-100" alt="Shopify" />
                <h6 className="heading mb-0 fw-500 text-capitalize">Shopify</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
});

PluginsSection.displayName = "Plugins";
export default PluginsSection;