import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import ResetPassword from "./pages/ResetPassword";
import ForgotPassword from "./pages/ForgotPassword";
import MainLayout from "./components/MainLayout";
import Dashboard from "./pages/Dashboard";
import Enquiries from "./pages/Enquiries";
import BlogsList from "./pages/BlogsList";
import BlogCatList from "./pages/BlogCatList";
import Orders from "./pages/Orders";
import AddBlogCat from "./pages/AddBlogCat";
import AddProduct from "./pages/AddProduct";
import Category from "./pages/Category";
import CategoriesList from "./pages/CategoriesList";
import Brand from "./pages/Brand";
import BrandsList from "./pages/BrandsList";
import Color from "./pages/Color";
import ColorsList from "./pages/ColorsList";
import Customers from "./pages/Customers";
import ProductsList from "./pages/ProductsList";
import Coupon from "./pages/Coupon";
import CouponList from "./pages/CouponList";
import AddBlog from "./pages/AddBlog";
import BlogCat from "./pages/BlogCat";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/admin" element={<MainLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="enquiries" element={<Enquiries />} />
          <Route path="add-blog" element={<AddBlog />} />
          <Route path="blog-category" element={<BlogCat />} />
          <Route path="blogs-list" element={<BlogsList />} />
          <Route path="blog-categories-list" element={<BlogCatList />} />
          <Route path="orders" element={<Orders />} />
          <Route path="add-blog-cat" element={<AddBlogCat />} />
          <Route path="coupon" element={<Coupon />} />
          <Route path="coupon-list" element={<CouponList />} />
          <Route path="add-product" element={<AddProduct />} />
          <Route path="category" element={<Category />} />
          <Route path="categories-list" element={<CategoriesList />} />
          <Route path="brand" element={<Brand />} />
          <Route path="brands-list" element={<BrandsList />} />
          <Route path="color" element={<Color />} />
          <Route path="colors-list" element={<ColorsList />} />
          <Route path="customers" element={<Customers />} />
          <Route path="products-list" element={<ProductsList />} />
          <Route />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
