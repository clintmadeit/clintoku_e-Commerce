import React from "react";
import CustomInput from "../components/CustomInput";

const Brand = () => {
  return (
    <div>
      <h3 className="mb-4">Add Products Brand</h3>
      <div>
        <form action="">
          <CustomInput type="text" label="Enter Brand Details" />
          <button className="btn btn-success border-0 rounded-3 my-5 mt-3">
            Add Brand
          </button>
        </form>
      </div>
    </div>
  );
};

export default Brand;
