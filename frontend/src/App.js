import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Shop from "./pages/Shop";
import Contact from "./pages/Contact";
import { Blog } from "./pages/Blog";
import CompareProducts from "./pages/CompareProducts";
import WishList from "./pages/WishList";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
import SingleBlog from "./pages/SingleBlog";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import ShippingPolicy from "./pages/ShippingPolicy";
import RefundPolicy from "./pages/RefundPolicy";
import TermsAndConditions from "./pages/TermsAndConditions";
import Product from "./pages/Product";
import Checkout from "./pages/Checkout";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="product" element={<Shop />} />
            <Route path="product/:id" element={<Product />} />
            <Route path="checkout" element={<Checkout />} />
            <Route path="contact" element={<Contact />} />
            <Route path="blog" element={<Blog />} />
            <Route path="blog/:id" element={<SingleBlog />} />
            <Route path="compare-products" element={<CompareProducts />} />
            <Route path="login" element={<Login />} />
            <Route path="wishlist" element={<WishList />} />
            <Route path="cart" element={<Cart />} />
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Signup />} />
            <Route path="forgot-password" element={<ForgotPassword />} />
            <Route path="reset-password" element={<ResetPassword />} />
            <Route path="privacy-policy" element={<PrivacyPolicy />} />
            <Route path="shipping-policy" element={<ShippingPolicy />} />
            <Route path="refund-policy" element={<RefundPolicy />} />
            <Route
              path="terms-and-conditions"
              element={<TermsAndConditions />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
