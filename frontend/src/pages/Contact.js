import React from "react";
import Meta from "../components/Meta";
import BreadCrump from "../components/BreadCrump";
import { AiTwotoneHome } from "react-icons/ai";
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { BsInfoSquare } from "react-icons/bs";
import Container from "../components/Container";

const Contact = () => {
  return (
    <>
      <Meta title="Contact-Us" />
      <BreadCrump title="Contact-Us" />
      <Container class1="contact-wrapper home-wrapper-2 py-5 px-5">
        <div className="row">
          <div className="col-12">
            <iframe
              title="store-location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8154076876353!2d36.81770927395968!3d-1.2846999987030838!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10d6c7b4efa7%3A0x3df8d3ef6779c825!2sI%26M%20Bank%20Kenyatta%20Avenue%20Branch%2C%201st%20Flr%2C%20I%26M%20Bank%20Tower%2C%20Kenyatta%20Avenue%20Nairobi!5e0!3m2!1sen!2ske!4v1697093356184!5m2!1sen!2ske"
              width="600"
              height="450"
              className="border-0 w-100"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="col-12 mt-5">
            <div className="contact-inner-wrapper d-flex justify-content-between">
              <div>
                <h3 className="contact-title mb-4">Contact</h3>
                <form action="" className="d-flex flex-column gap-10">
                  <div>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Name"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email"
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      className="form-control"
                      placeholder="Mobile Number"
                    />
                  </div>
                  <div>
                    <textarea
                      name=""
                      id=""
                      cols="30"
                      rows="4"
                      className="form-control w-100"
                      placeholder="Message"
                    ></textarea>
                  </div>
                  <div>
                    <button className="button border-0">Submit</button>
                  </div>
                </form>
              </div>
              <div>
                <h3 className="contact-title">Get In Touch With Us</h3>
                <div>
                  <ul className="ps-0">
                    <li className="mb-3 d-flex gap-15 align-items-center">
                      <AiTwotoneHome className="fs-5" />
                      <address className="mb-0">
                        4411 Kenyatta Avenue, 4411-00100, Nairobi, Kenya I&M
                        Bank Towers
                      </address>
                    </li>
                    <li className="mb-3 d-flex gap-15 align-items-center">
                      <IoCall className="fs-5" />
                      <a href="tel:+254 113168134">+254 113168134</a>
                    </li>
                    <li className="mb-3 d-flex gap-15 align-items-center">
                      <MdEmail className="fs-5" />
                      <a href="mailto:contact@clintoku.com">
                        contact@clintoku.com
                      </a>
                    </li>
                    <li className="mb-3 d-flex gap-15 align-items-center">
                      <BsInfoSquare className="fs-5" />
                      <p className="mb-0">Monday - Friday: 8:00 AM - 7:00 PM</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Contact;
