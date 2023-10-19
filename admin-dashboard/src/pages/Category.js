import React from "react";
import CustomInput from "../components/CustomInput";

const Category = () => {
  return (
    <div>
      <h3 className="mb-4">Add Product Category</h3>
      <div>
        <form action="">
          <CustomInput type="text" label="Enter Product Category Details" />
          <button className="btn btn-success border-0 rounded-3 my-5 mt-3">
            Add Category
          </button>
        </form>
      </div>
    </div>
  );
};

export default Category;
