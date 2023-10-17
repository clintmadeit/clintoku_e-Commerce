import React from "react";
import Meta from "../components/Meta";
import BreadCrump from "../components/BreadCrump";
import { Link } from "react-router-dom";
import { IoReturnUpBackOutline } from "react-icons/io5";
import blog from "../images/blog-1.jpg";
import Container from "../components/Container";

const SingleBlog = () => {
  return (
    <>
      <Meta title="Dynamic Blog Name" />
      <BreadCrump title="Dynamic Blog Name" />
      <Container class1="blog-wrapper home-wrapper-2 py-5 px-5">
        <div className="row">
          <div className="col-12">
            <div className="single-blog-card">
              <h3 className="title">
                A Beautiful Morning It Is To Start The Day
              </h3>
              <img
                src={blog}
                className="img-fluid w-100 my-4"
                alt="single blog"
              />
              <p>
                In June, we shared our current cash position setting out the
                financial deficit caused by having to cancel the 2020 Festival.
                Since then we’ve received gifts and donations, including taking
                an online offering last week at The New day Experience which
                raised £22k, and therefore we are delighted to share the deficit
                has been reduced to -£52,500; which is incredible considering
                the huge hole that we were looking at just a couple of months
                ago. A huge thank you to everyone who has given. The financial
                impact of having to cancel the 2020 Festival is still
                significant and we still need to reduce the outstanding deficit
                further to ensure New day is in the strongest possible position
                going forward, and to minimize as much as possible the impact on
                a single local church. Please consider whether you or your
                church are able to stand with us at this time and help
                financially. You can give online by clicking the link below.
              </p>
              <Link to="/blog" className="d-flex align-items-center gap-10">
                <IoReturnUpBackOutline className="fs-5" /> Back to Blogs
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default SingleBlog;
