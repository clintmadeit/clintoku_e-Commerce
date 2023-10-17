import React from "react";
import { Link } from "react-router-dom";
import {
  BsLinkedin,
  BsGithub,
  BsInstagram,
  BsTwitter,
  BsFacebook,
} from "react-icons/bs";
import newsletter from "../images/newsletter.png";

const Footer = () => {
  return (
    <>
      <footer className="py-4 px-5">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-5">
              <div className="footer-top-data d-flex gap-30 align-items-center">
                <img src={newsletter} alt="newsletter" />
                <h2 className="mb-0">Sign Up for newsletter</h2>
              </div>
            </div>
            <div className="col-7">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control py-1"
                  placeholder="Enter Your Email Address"
                  aria-label="Enter Your Email Address"
                  aria-describedby="basic-addon2"
                />
                <span className="input-group-text p-2" id="basic-addon2">
                  Subscribe
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-4 px-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-4">
              <h4 className="mb-4">Contact Us</h4>
              <div>
                <address className="fs-6">
                  4411 Kenyatta Avenue, <br /> 4411-00100, Nairobi, Kenya
                  <br /> I&M Bank House Suite 203
                </address>
                <a
                  href="tel:+254 113168134"
                  className="mt-3 d-block mb-1 text-white"
                >
                  +254 113168134
                </a>
                <a
                  href="mailto:contact@clintoku.com"
                  className="mt-3 d-block mb-0 text-white"
                >
                  contact@clintoku.com
                </a>
                <div className="social-icons d-flex align-items-center gap-30 mt-4">
                  <a className="bs-socials" href="#">
                    <BsLinkedin className="fs-5" />
                  </a>
                  <a className="bs-socials" href="#">
                    <BsGithub className="fs-5" />
                  </a>
                  <a className="bs-socials" href="#">
                    <BsInstagram className="fs-5" />
                  </a>
                  <a className="bs-socials" href="#">
                    <BsFacebook className="fs-5" />
                  </a>
                  <a className="bs-socials" href="#">
                    <BsTwitter className="fs-5" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-3">
              <h4 className="mb-4">Information</h4>
              <div className="footer-links d-flex flex-column">
                <Link to="/privacy-policy" className="py-2 mb-1 text-white">
                  Privacy Policy
                </Link>
                <Link to="/refund-policy" className="py-2 mb-1 text-white">
                  Refund Policy
                </Link>
                <Link to="/shipping-policy" className="py-2 mb-1 text-white">
                  Shipping Policy
                </Link>
                <Link
                  to="/terms-and-conditions"
                  className="py-2 mb-1 text-white"
                >
                  Terms of Service
                </Link>
                <Link to="/blog" className="py-2 mb-1 text-white">
                  Blog
                </Link>
              </div>
            </div>
            <div className="col-3">
              <h4 className="mb-4">Account</h4>
              <div className="footer-links d-flex flex-column">
                <Link className="py-2 mb-1 text-white">Search</Link>
                <Link className="py-2 mb-1 text-white">About Us</Link>
                <Link className="py-2 mb-1 text-white">Faq</Link>
                <Link className="py-2 mb-1 text-white">Contact</Link>
                <Link className="py-2 mb-1 text-white">Cart</Link>
              </div>
            </div>
            <div className="col-2">
              <h4 className="mb-4">Categories</h4>
              <div className="footer-links d-flex flex-column">
                <Link className="py-2 mb-1 text-white">Phones</Link>
                <Link className="py-2 mb-1 text-white">Computers</Link>
                <Link className="py-2 mb-1 text-white">Accessories</Link>
                <Link className="py-2 mb-1 text-white">Electronics</Link>
                <Link className="py-2 mb-1 text-white">Services</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-4 px-5">
        <div className="row">
          <div className="col-12">
            <p className="text-center mb-0 copyright">
              &copy; {new Date().getFullYear()} Powered by{" "}
              <a href="" className="copy-link">
                Clintoku
              </a>
              Devs
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
