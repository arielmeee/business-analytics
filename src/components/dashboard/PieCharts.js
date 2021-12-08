import React from "react";
import { Pie } from "@ant-design/charts";
import { Layout, Row } from "antd";

const PieCharts = () => {
  const data = [
    {
      type: "Category One",
      value: 27,
    },
    {
      type: "Category Two",
      value: 25,
    },
    {
      type: "Category Three",
      value: 18,
    },
    {
      type: "Category Four",
      value: 15,
    },
    {
      type: "Category Five",
      value: 10,
    },
    {
      type: "Other",
      value: 5,
    },
  ];
  const config = {
    appendPadding: 10,
    data,
    angleField: "value",
    colorField: "type",
    radius: 0.8,
    label: {
      type: "outer",
    },
    interactions: [
      {
        type: "element-active",
      },
    ],
  };

  return (
    <Layout>
      <Row
        justify="start"
      >
        <Pie {...config} />
      </Row>
    </Layout>
  );
};

export default PieCharts;
