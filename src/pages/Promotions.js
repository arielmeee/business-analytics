import { Pie } from "@ant-design/charts";
import { Layout, Row } from "antd";
import data from '../dummy_data/promotions';

// Pie chart
const Promotions = () => {
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
}

export default Promotions
