import React from "react";
import { Table } from "antd";

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

const Coupon = () => {
  return (
    <div>
      <h3 className="mb-4">Coupon</h3>
      <div>
        <Table columns={columns} dataSource={data1} />
      </div>
    </div>
  );
};

export default Coupon;
