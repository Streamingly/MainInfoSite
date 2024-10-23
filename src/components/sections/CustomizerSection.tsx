import { FC, Fragment, memo } from "react";
import Image from "next/image";

// Image assets
import HomeDemoImg from "../../assets/images/home/home-demo.webp";
// import RtlSupportImg from "../../assets/images/home/rtl-support.svg";

const CustomizerSection: FC = memo(() => {
  return (
    <Fragment>
      <div className="container">
        <div className="row align-items-center g-4 flex-column-reverse flex-column flex-lg-row">
          <div className="col-lg-5">
            <Image src={HomeDemoImg} className="img-fluid w-100" alt="Home Demo" />
          </div>
          <div className="col-lg-1 d-none d-lg-block"></div>
          <div className="col-lg-6">
            <div className="title">
              <span className="sub-title">Live Customizer</span>
              <h2 className="fw-semibold text-capitalize mb-0">
                Customize Your <span className="text-primary">Client-Side</span> with Quick Styling
              </h2>
              <p className="mb-0 desc">
                Unlock Streamingly's Live Customizer, control your dashboar looks with admin panel at real-time 
                <br />
                
              </p>
            </div>
            <div className="row row-cols-xl-2 row-cols-md-2 row-cols-1 justify-content-center g-4">
              <div className="col">
                <div className="d-flex align-items-center gap-3">
                  {/* <Image src={RtlSupportImg} className="w-35" alt="RTL Support" /> */}
                  <h6 className="fw-500 text-capitalize mb-0">Video Actions</h6>
                </div>
              </div>
              <div className="col">
                <div className="d-flex align-items-center gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 51 50"
                    fill="none"
                    className="w-35"
                  >
                    <path
                      d="M11.5534 44.75C11.5533 44.75 38.8858 44.75 38.8858 44.75C47.2402 44.4901 47.267 32.3525 38.8858 32.0837H26.8409L35.3619 23.5736C41.1133 17.5405 32.491 8.86445 26.3958 14.6085C26.396 14.6083 17.8865 23.1248 17.8865 23.1248V11.0843C17.957 7.68672 14.9519 4.67956 11.5533 4.75126C8.06128 4.75126 5.22021 7.59224 5.22021 11.0843V38.4168C5.22144 40.1971 6.00984 41.9775 7.34505 43.1418C8.49389 44.1818 10.012 44.7364 11.5534 44.75ZM23.8863 42.0834H11.5533C8.35766 42.1077 6.64705 38.0535 8.97868 35.8115C9.6412 35.1565 10.5501 34.7503 11.5533 34.7503H23.8863V42.0834ZM35.4576 34.7503H38.8858C43.7204 34.8766 43.7199 41.9577 38.8858 42.0834H35.4576V34.7503ZM32.791 34.7503V42.0834H26.5529V34.7503H32.791ZM28.2787 16.4969C31.7679 13.1518 36.8284 18.225 33.477 21.6877C33.4771 21.6875 31.0518 24.1097 31.0518 24.1097L25.8598 18.9177L28.2787 16.4969ZM23.9752 20.8038L29.1653 25.9939L24.7512 30.4024L19.5655 25.2167L23.9752 20.8038ZM17.6807 27.1027L22.6617 32.0837H12.7035C12.7035 32.0837 17.6556 27.1374 17.6807 27.1027ZM7.8868 11.0843C7.8868 9.06229 9.53125 7.41784 11.5533 7.41784C13.5176 7.37691 15.261 9.11943 15.2199 11.0844C15.2199 11.0843 15.2199 14.5126 15.2199 14.5126H7.8868V11.0843ZM7.8868 17.1792H15.2199V23.4173H7.8868V17.1792ZM7.8868 26.0839H14.9297L7.8868 33.1325V26.0839Z"
                      fill="white"
                    />
                    <path
                      d="M12.414 40.3703C14.9816 40.3267 14.9813 36.5066 12.4139 36.4634C9.84623 36.507 9.84654 40.327 12.414 40.3703Z"
                      fill="white"
                    />
                  </svg>
                  <h6 className="fw-500 text-capitalize mb-0">Color Customizer</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
});

CustomizerSection.displayName = "Customizer";
export default CustomizerSection;
