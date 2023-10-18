import React from "react";
import Meta from "../components/Meta";
import BreadCrump from "../components/BreadCrump";
import watch from "../images/watch.jpg";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { Link } from "react-router-dom";
import Container from "../components/Container";
const Cart = () => {
  return (
    <>
      <Meta title="Cart" />
      <BreadCrump title="Cart" />
      <Container class1="cart-wrapper home-wrapper-2 py-5 px-5">
        <div className="row">
          <div className="col-12">
            <div className=" cart-header py-3 d-flex justify-content-between align-items-center">
              <h4 className="cart-col-1">Product</h4>
              <h4 className="cart-col-2">Price</h4>
              <h4 className="cart-col-3">Quantity</h4>
              <h4 className="cart-col-4">Total</h4>
            </div>
            <div className=" cart-data mb-2 py-3 d-flex justify-content-between align-items-center">
              <div className="cart-col-1 gap-15 d-flex align-items-center">
                <div className="w-25">
                  <img src={watch} className="img-fluid" alt="product" />
                </div>
                <div className="w-75">
                  <p>Product Name</p>
                  <p>Color: Blue</p>
                  <p>Size: M</p>
                </div>
              </div>
              <div className="cart-col-2">
                <h5 className="price">$ 350</h5>
              </div>
              <div className="cart-col-3 d-flex align-items-center gap-15">
                <div>
                  <input
                    className="form-control"
                    type="number"
                    name=""
                    id=""
                    min={1}
                    max={10}
                  />
                </div>
                <div>
                  <RiDeleteBin5Fill className="text-danger" />
                </div>
              </div>
              <div className="cart-col-4">
                <h5 className="price">$ 350</h5>
              </div>
            </div>
            <div className="col-12 py-2 mt-4">
              <div className="d-flex justify-content-between">
                <Link to="/product" className="button">
                  Continue Shopping
                </Link>
              </div>
              <div className="d-flex flex-column align-items-end">
                <h4>Subtotal: $ 3500</h4>
                <p>Taxes and shipping calculated at checkout</p>
                <Link to="/checkout" className="button">
                  Checkout
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Cart;