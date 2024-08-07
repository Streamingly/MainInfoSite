import { memo, Fragment, useState, useEffect } from "react";

// react-bootstrap
import { Button, Nav, Collapse, Navbar, Offcanvas, Container, Dropdown } from "react-bootstrap";

//router
import Link from "next/link";
import { useRouter } from "next/router";


// components
import Logo from "../logo";
import CustomToggle from "../CustomToggle";


const HeaderDefault = memo(() => {
  const [isMega, setIsMega] = useState(true);
  const location = useRouter();

  const [show1, setShow1] = useState(false);
  const [show, setShow] = useState(false);

  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);
  const [open5, setOpen5] = useState(false);
  const [open6, setOpen6] = useState(false);
  const [open7, setOpen7] = useState(false);
  const [open8, setOpen8] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const headerSticky = document.querySelector(".header-sticky");
      if (headerSticky) {
        if (window.scrollY > 1) {
          headerSticky.classList.add("sticky");
        } else {
          headerSticky.classList.remove("sticky");
        }
      }
    };

    const updateIsMega = () => {
      setIsMega(location.asPath === "/");
    };

    window.addEventListener("scroll", handleScroll);
    updateIsMega();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [location]);
  return (
    <Fragment>
      <header className="header-center-home header-default header-sticky">
        <Navbar
          expand="xl"
          className="nav navbar-light iq-navbar header-hover-menu py-xl-0"
        >
          <Container fluid className="navbar-inner">
            <div className="d-flex align-items-center justify-content-between w-100 landing-header">
              <div className="d-flex gap-3 gap-xl-0 align-items-center">
                <div>
                  <button
                    type="button"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#navbar_main"
                    aria-controls="navbar_main"
                    className="d-xl-none btn btn-primary rounded-pill p-1 pt-0 toggle-rounded-btn"
                    onClick={() => setShow1(!show1)}
                  >
                    <svg width="20px" className="icon-20" viewBox="0 0 24 24">
                      <path
                        fill="currentColor"
                        d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z"
                      ></path>
                    </svg>
                  </button>
                </div>
                <Logo></Logo>
              </div>
              <Navbar
                expand="xl"
                className={`offcanvas mobile-offcanvas nav hover-nav horizontal-nav py-xl-0 ${show1 === true ? "show" : ""
                  } ${isMega ? "mega-menu-content" : ""}`}
                style={{
                  visibility: `${show1 === true ? "visible" : "hidden"}`,
                }}
                id="navbar_main"
              >
                <Container fluid className="container-fluid p-lg-0">
                  <Offcanvas.Header className="px-0" closeButton>
                    <div className="navbar-brand ms-3">
                      <Logo></Logo>
                    </div>
                  </Offcanvas.Header>
                  <ul
                    className="navbar-nav iq-nav-menu list-unstyled"
                    id="header-menu"
                  >
                    <Nav.Item as="li">
                            <Link
                              href="/"
                              className={`${location.asPath === "/"
                                ? "active"
                                : ""
                                } nav-link`}
                            >
                              {" "}
                              Home{" "}
                            </Link>
                    </Nav.Item>
                    <Nav.Item as="li">
                            <Link
                              href="/extra/about-us"
                              className={`${location.asPath === "/extra/about-us"
                                ? "active"
                                : ""
                                } nav-link`}
                            >
                              {" "}
                              About Us{" "}
                            </Link>
                    </Nav.Item>
                    <Nav.Item as="li">
                            <Link
                              href="/extra/pricing-plan"
                              className={`${location.asPath === "/extra/pricing-plan" ? "active" : ""
                                } nav-link`}
                            >
                              {" "}
                              Pricing Plan{" "}
                            </Link>
                    </Nav.Item>
                    <Nav.Item as="li">
                            <Link
                              href="/blogs/grid/three-column"
                              className={`${location.asPath === "/blogs/grid/three-column" ? "active" : ""
                                } nav-link`}
                            >
                              {" "}
                              Blogs{" "}
                            </Link>
                    </Nav.Item>
                    <Nav.Item as="li">
                            <Link
                              href="/blogs/grid/three-column"
                              className={`${location.asPath === "/blogs/grid/three-column" ? "active" : ""
                                } nav-link`}
                            >
                              {" "}
                              Documentation{" "}
                            </Link>
                    </Nav.Item>
                    <Nav.Item as="li">
                            <Link
                              href="/blogs/grid/three-column"
                              className={`${location.asPath === "/blogs/grid/three-column" ? "active" : ""
                                } nav-link`}
                            >
                              {" "}
                              Demo{" "}
                            </Link>
                    </Nav.Item>
                    {/* <Nav.Item as="li">
                      <Nav.Link
                        aria-expanded={open8}
                        href=""
                        onClick={() => setOpen8(!open8)}
                        className={`${location.asPath.split('/').includes('merchandise') && location.asPath.split('/').length > 2
                          ? "active"
                          : ""
                          }`}
                      >
                        <span className="item-name">Shop</span>
                        <span className="menu-icon ms-2">
                          <i
                            className="fa fa-caret-down toggledrop-desktop right-icon"
                            aria-hidden="true"
                          ></i>
                          <span className="toggle-menu">
                            <i
                              className="fa fa-plus arrow-active text-white"
                              aria-hidden="true"
                            ></i>
                            <i
                              className="fa fa-minus arrow-hover text-white"
                              aria-hidden="true"
                            ></i>
                          </span>
                        </span>
                      </Nav.Link>
                      <Collapse in={open8} className="sub-nav list-unstyled">
                        <ul>
                          <Nav.Item as="li">
                            <Link
                              href="/merchandise/shop"
                              className={`${location.asPath === "/merchandise/shop" ? "active" : ""
                                } nav-link`}
                            >
                              {" "}
                              Shop{" "}
                            </Link>
                          </Nav.Item>
                          <Nav.Item as="li">
                            <Link
                              href="/merchandise/account"
                              className={`${location.asPath === "/merchandise/account" ? "active" : ""
                                } nav-link`}
                            >
                              {" "}
                              My Account Page{" "}
                            </Link>
                          </Nav.Item>
                          <Nav.Item as="li">
                            <Link
                              href="/merchandise/cart"
                              className={`${location.asPath === "/merchandise/cart" ? "active" : ""
                                } nav-link`}
                            >
                              {" "}
                              Cart Page{" "}
                            </Link>
                          </Nav.Item>
                          <Nav.Item as="li">
                            <Link
                              href="/merchandise/wishlist"
                              className={`${location.asPath === "/merchandise/wishlist"
                                ? "active"
                                : ""
                                } nav-link`}
                            >
                              {" "}
                              Wishlist Page{" "}
                            </Link>
                          </Nav.Item>
                          <Nav.Item as="li">
                            <Link
                              href="/merchandise/checkout"
                              className={`${location.asPath === "/merchandise/checkout"
                                ? "active"
                                : ""
                                } nav-link`}
                            >
                              {" "}
                              Checkout Page{" "}
                            </Link>
                          </Nav.Item>
                          <Nav.Item as="li">
                            <Link
                              href="/merchandise/track-order"
                              className={`${location.asPath === "/merchandise/track-order"
                                ? "active"
                                : ""
                                } nav-link`}
                            >
                              {" "}
                              Order Tracking{" "}
                            </Link>
                          </Nav.Item>
                        </ul>
                      </Collapse>
                    </Nav.Item> */}
                  </ul>
                </Container>
              </Navbar>
              <div className="right-panel">
                <Button
                  id="navbar-toggle"
                  bsPrefix="navbar-toggler"
                  type="button"
                  aria-expanded={show}
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  onClick={() => setShow(!show)}
                >
                  <span className="navbar-toggler-btn">
                    <span className="navbar-toggler-icon"></span>
                  </span>
                </Button>
                <div
                  className={`navbar-collapse ${show === true ? "collapse show" : "collapse"
                    }`}
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav align-items-center ms-auto mb-2 mb-xl-0">
                  <Link
                              href="https://app.streamingly.net/login"
                              className={`${location.asPath === "https://app.streamingly.net/login" ? "active" : ""
                                } nav-link`}
                            >
                              {" "}
                              <button className="btn btn-primary custom-button">My Account</button>{" "}
                            </Link>
                  </ul>
                </div>
              </div>
            </div>
          </Container>
        </Navbar>
      </header>
    </Fragment>
  );
});

HeaderDefault.displayName = "HeaderDefault";
export default HeaderDefault;
