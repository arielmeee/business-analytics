import { Pie } from "@ant-design/charts";
import { Layout, Row } from "antd";
import data from '../dummy_data/preferences';

// Pie chart
const Preferences = () => {
  const config = {
    appendPadding: 10,
    data,
    angleField: "value",
    colorField: "type",
    radius: 0.8,
    label: {
      type: "outer",
      content: function content(_ref) {
        var percent = _ref.percent;
        return ''.concat(percent * 100, '%');
      },
    },
    interactions: [
      {
        type: "element-active",
      },
    ],
  };

  return (
    <>
      <h4 className="py-5 px-4 text-lg font-semibold antialiased">
        Customers' Clothing Preference Report
      </h4>
      <Layout>
        <Row
          justify="start"
          style={{ paddingLeft: '1rem', paddingRight: '1rem' }}
        >
          <Pie {...config} />
        </Row>
      </Layout>
    </>
  );
}

export default Preferences
