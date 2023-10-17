import React from "react";
import Meta from "../components/Meta";
import BreadCrump from "../components/BreadCrump";
import Color from "../components/Color";
import Container from "../components/Container";

const CompareProducts = () => {
  return (
    <>
      <Meta title="Compare Products" />
      <BreadCrump title="Compare Products" />
      <Container class1="compare-products-wrapper home-wrapper-2 py-5 px-5">
        <div className="row">
          <div className="col-3">
            <div className="compare-product-card position-relative">
              <img
                src="images/cross.svg"
                className="position-absolute cross img-fluid"
                alt="cross"
              />
              <div className="product-card image">
                <img
                  src="images/watch.jpg"
                  className="img-fluid w-100"
                  alt="watch"
                />
              </div>
              <div className="compare-product-details">
                <h5 className="title">
                  Accelerometer, gyro, heart rate, barometer, always-on
                </h5>
                <h6 className="price mb-3 mt-3">$ 350</h6>
                <div>
                  <div className="product-details">
                    <h5>Brand:</h5>
                    <p>Apple</p>
                  </div>
                  <div className="product-details">
                    <h5>Type:</h5>
                    <p>Smartwatch</p>
                  </div>
                  <div className="product-details">
                    <h5>Availability:</h5>
                    <p>In Store</p>
                  </div>
                </div>
                <div className="product-details">
                  <h5>Color:</h5>
                  <Color />
                </div>
                <div className="product-details">
                  <h5>Size:</h5>
                  <div className="d-flex gap-10">
                    <div className="size">S</div>
                    <div className="size">M</div>
                    <div className="size">L</div>
                    <div className="size">XL</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="compare-product-card position-relative">
              <img
                src="images/cross.svg"
                className="position-absolute cross img-fluid"
                alt="cross"
              />
              <div className="product-card image">
                <img
                  src="images/watch.jpg"
                  className="img-fluid w-100"
                  alt="watch"
                />
              </div>
              <div className="compare-product-details">
                <h5 className="title">
                  Accelerometer, gyro, heart rate, barometer, always-on
                </h5>
                <h6 className="price mb-3 mt-3">$ 350</h6>
                <div>
                  <div className="product-details">
                    <h5>Brand:</h5>
                    <p>Apple</p>
                  </div>
                  <div className="product-details">
                    <h5>Type:</h5>
                    <p>Smartwatch</p>
                  </div>
                  <div className="product-details">
                    <h5>Availability:</h5>
                    <p>In Store</p>
                  </div>
                </div>
                <div className="product-details">
                  <h5>Color:</h5>
                  <Color />
                </div>
                <div className="product-details">
                  <h5>Size:</h5>
                  <div className="d-flex gap-10">
                    <div className="size">S</div>
                    <div className="size">M</div>
                    <div className="size">L</div>
                    <div className="size">XL</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default CompareProducts;
