import React from "react";
import Meta from "../components/Meta";
import BreadCrump from "../components/BreadCrump";
import Container from "../components/Container";

const WishList = () => {
  return (
    <>
      <Meta title="WishList" />
      <BreadCrump title="WishList" />
      <Container class1="wishlist-wrapper home-wrapper-2 py-5 px-5">
        <div className="row">
          <div className="col-3">
            <div className="wishlist-card position-relative">
              <img
                src="images/cross.svg"
                className="position-absolute cross img-fluid"
                alt="cross"
              />
              <div className="wishlist-card-image">
                <img
                  src="images/watch.jpg"
                  className="img-fluid w-100"
                  alt="watch"
                />
              </div>
              <div className="px-3 py-3">
                <h5 className="title">
                  Accelerometer, gyro, heart rate, barometer, always-on
                </h5>
                <h6 className="price mb-3 mt-3">$ 350</h6>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="wishlist-card position-relative">
              <img
                src="images/cross.svg"
                className="position-absolute cross img-fluid"
                alt="cross"
              />
              <div className="wishlist-card-image">
                <img
                  src="images/watch.jpg"
                  className="img-fluid w-100"
                  alt="watch"
                />
              </div>
              <div className="px-3 py-3">
                <h5 className="title">
                  Accelerometer, gyro, heart rate, barometer, always-on
                </h5>
                <h6 className="price mb-3 mt-3">$ 350</h6>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="wishlist-card position-relative">
              <img
                src="images/cross.svg"
                className="position-absolute cross img-fluid"
                alt="cross"
              />
              <div className="wishlist-card-image">
                <img
                  src="images/watch.jpg"
                  className="img-fluid w-100"
                  alt="watch"
                />
              </div>
              <div className="px-3 py-3">
                <h5 className="title">
                  Accelerometer, gyro, heart rate, barometer, always-on
                </h5>
                <h6 className="price mb-3 mt-3">$ 350</h6>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default WishList;
