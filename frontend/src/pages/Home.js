import React from "react";
import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";
import BlogCard from "../components/BlogCard";
import ProductCard from "../components/ProductCard";
import SpecialProduct from "../components/SpecialProduct";
import Container from "../components/Container";
import { services } from "../utils/Data";

const Home = () => {
  return (
    <>
      <Container class1="home-wrapper-1 py-5 px-5">
        <div className="row">
          <div className="col-6">
            <div className="main-banner position-relative">
              <img
                src="images/main-banner-1.jpg"
                className="img-fluid rounded-3"
                alt="main banner"
              />
              <div className="main-banner-content position-absolute">
                <h4>SUPERCHARGE FOR PROS</h4>
                <h5>Samsung S23 Ultra</h5>
                <p>From $999.00 or $42.50/mo</p>
                <Link className="button">SHOP NOW</Link>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="d-flex flex-wrap gap-10 justify-content-between align-items-center">
              <div className="small-banner position-relative">
                <img
                  src="images/catbanner-01.jpg"
                  className="img-fluid rounded-3"
                  alt="main banner"
                />
                <div className="small-banner-content position-absolute">
                  <h4>BEST SALE</h4>
                  <h5>Laptops Max</h5>
                  <p>
                    From $999.00 <br /> or $42.50/mo
                  </p>
                </div>
              </div>
              <div className="small-banner position-relative">
                <img
                  src="images/catbanner-02.jpg"
                  className="img-fluid rounded-3"
                  alt="main banner"
                />
                <div className="small-banner-content position-absolute">
                  <h4>JUST ARRIVED</h4>
                  <h5>Buy IPad Air</h5>
                  <p>
                    From $999.00 <br /> or $42.50/mo
                  </p>
                </div>
              </div>
              <div className="small-banner position-relative">
                <img
                  src="images/catbanner-03.jpg"
                  className="img-fluid rounded-3"
                  alt="main banner"
                />
                <div className="small-banner-content position-absolute">
                  <h4>DISCOUNTED</h4>
                  <h5>Smartwatch 8</h5>
                  <p>
                    From $999.00 <br /> or $42.50/mo
                  </p>
                </div>
              </div>
              <div className="small-banner position-relative">
                <img
                  src="images/catbanner-04.jpg"
                  className="img-fluid rounded-3"
                  alt="main banner"
                />
                <div className="small-banner-content position-absolute">
                  <h4>FREE ENGRAVING</h4>
                  <h5>Audio Eng.</h5>
                  <p>
                    From $999.00 <br /> or $42.50/mo
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container class1="home-wrapper-2 py-5 px-5">
        <div className="row">
          <div className="col-12">
            <div className="services d-flex align-items-center justify-content-between">
              {services?.map((i, j) => {
                return (
                  <div className="service-card" key={j}>
                    <div className="service-image">
                      <img src={i.image} alt="service" />
                    </div>
                    <div className="service-details">
                      <h6>{i.title}</h6>
                      <p>{i.tagline}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
      <Container class1="home-wrapper-2 py-5 px-5">
        <div className="row">
          <div className="col-12">
            <div className="categories d-flex flex-wrap justify-content-between align-items-center">
              <div className="d-flex gap align-items-center">
                <div>
                  <h6>Laptops</h6>
                  <p>10 items</p>
                </div>
                <img src="images/laptop.jpg" alt="cameras" />
              </div>
              <div className="d-flex gap align-items-center">
                <div>
                  <h6>Cameras</h6>
                  <p>10 items</p>
                </div>
                <img src="images/camera.jpg" alt="cameras" />
              </div>
              <div className="d-flex gap align-items-center">
                <div>
                  <h6>Android Tv</h6>
                  <p>10 items</p>
                </div>
                <img src="images/tv.jpg" alt="cameras" />
              </div>
              <div className="d-flex gap align-items-center">
                <div>
                  <h6>headphones</h6>
                  <p>10 items</p>
                </div>
                <img src="images/headphone.jpg" alt="cameras" />
              </div>
              <div className="d-flex gap align-items-center">
                <div>
                  <h6>Laptops</h6>
                  <p>10 items</p>
                </div>
                <img src="images/laptop.jpg" alt="cameras" />
              </div>
              <div className="d-flex gap align-items-center">
                <div>
                  <h6>Cameras</h6>
                  <p>10 items</p>
                </div>
                <img src="images/camera.jpg" alt="cameras" />
              </div>
              <div className="d-flex gap align-items-center">
                <div>
                  <h6>Android Tv</h6>
                  <p>10 items</p>
                </div>
                <img src="images/tv.jpg" alt="cameras" />
              </div>
              <div className="d-flex gap align-items-center">
                <div>
                  <h6>headphones</h6>
                  <p>10 items</p>
                </div>
                <img src="images/headphone.jpg" alt="cameras" />
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container class1="feature-wrapper home-wrapper-2 py-5 px-5">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Featured Collection</h3>
          </div>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </Container>
      <Container class1="special-wrapper home-wrapper-2 p-5 px-5">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Special Products</h3>
          </div>
        </div>
        <div className="row">
          <SpecialProduct />
          <SpecialProduct />
          <SpecialProduct />
        </div>
      </Container>

      <Container class1="popular-wrapper home-wrapper-2 py-5 px-5">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Our popular Products</h3>
          </div>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </Container>
      <Container class1="marque-wrapper home-wrapper-2 py-5 px-5">
        <div className="row">
          <div className="col-12">
            <div className="marquee-inner-wrapper card-wrapper">
              <Marquee className="d-flex">
                <div className="mx-4 w-25">
                  <img src="images/brand-01.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-02.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-03.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-04.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-05.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-06.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-07.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-08.png" alt="brand" />
                </div>
              </Marquee>
            </div>
          </div>
        </div>
      </Container>
      <Container class1="feature-wrapper home-wrapper-2 py-5 px-5">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Featured Products</h3>
          </div>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </Container>
      <Container class1="famous-wrapper home-wrapper-2 py-5 px-5">
        <div className="row">
          <div className="col-3">
            <div className="famous-card position-relative">
              <img
                src="images/famous-1.png"
                className="img-fluid"
                alt="famous products"
              />
              <div className="famous-content position-absolute">
                <h5>Big Screen</h5>
                <h6>Smart Watch Series 8</h6>
                <p>From $399 or $17.45/mo for 24 mo.*</p>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="famous-card position-relative">
              <img
                src="images/famous-2.png"
                className="img-fluid"
                alt="famous products"
              />
              <div className="famous-content position-absolute">
                <h5 className="text-dark">HD Display</h5>
                <h6 className="text-dark">Rich HD Color Output</h6>
                <p className="text-dark">27-inch 8K Retina Display</p>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="famous-card position-relative">
              <img
                src="images/famous-3.png"
                className="img-fluid"
                alt="famous products"
              />
              <div className="famous-content position-absolute">
                <h5 className="text-dark">iPhones</h5>
                <h6 className="text-dark">iPhone 15 Pro Max.</h6>
                <p className="text-dark">
                  Now in Store From $1050.00 or 45.50/mo for 24 mo*
                </p>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="famous-card position-relative">
              <img
                src="images/famous-4.png"
                className="img-fluid"
                alt="famous products"
              />
              <div className="famous-content position-absolute">
                <h5 className="text-dark">Home Speakers</h5>
                <h6 className="text-dark">Room-filling Sound</h6>
                <p className="text-dark">From $750 or $115.60/mo for 12 mo*</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container class1="blog-wrapper home-wrapper-2 py-5 px-5">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">News and Updates</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-3">
            <BlogCard />
          </div>
          <div className="col-3">
            <BlogCard />
          </div>
          <div className="col-3">
            <BlogCard />
          </div>
          <div className="col-3">
            <BlogCard />
          </div>
        </div>
      </Container>
    </>
  );
};

export default Home;
