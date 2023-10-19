import React from "react";
import { Table } from "antd";
import CustomInput from "../components/CustomInput";

const columns = [
  {
    title: "OrderNo.",
    dataIndex: "key",
  },
  {
    title: "Status",
    dataIndex: "status",
  },
  {
    title: "Country.",
    dataIndex: "country",
  },
  {
    title: "Customer",
    dataIndex: "customer",
  },
  {
    title: "Date",
    dataIndex: "date",
  },
  {
    title: "Total",
    dataIndex: "total",
  },
];
const data1 = [];
for (let i = 1; i < 46; i++) {
  data1.push({
    key: i,
    customer: "Clinton Luseno",
    product: 32,
    status: "Pending",
    country: "Kenya",
    date: "12/05/2023",
    total: "$1100",
  });
}

const Color = () => {
  return (
    <div>
      <h3 className="mb-4">Add Color</h3>
      <div>
        <form action="">
          <CustomInput type="text" label="Enter Color Details" />
          <button className="btn btn-success border-0 rounded-3 my-5 mt-3">
            Add Color
          </button>
        </form>
      </div>
    </div>
  );
};

export default Color;
