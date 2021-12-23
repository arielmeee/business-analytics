import data from '../dummy_data/annual';
import { Line } from "@ant-design/charts";
import { Row, Col } from "antd";
import "../css/monthly.css";
// Line chart
const Annual = () => {
  const config = {
    data,
    padding: "auto",
    xField: "Date",
    yField: "scales",
    annotations: [
      // 低于中位数颜色变化
      {
        type: "regionFilter",
        start: ["min", "median"],
        end: ["max", "0"],
        color: "#F4664A",
      },
      {
        type: "text",
        position: ["min", "median"],
        content: "Median",
        offsetY: -4,
        style: {
          textBaseline: "bottom",
        },
      },
      {
        type: "line",
        start: ["min", "median"],
        end: ["max", "median"],
        style: {
          stroke: "#F4664A",
          lineDash: [2, 2],
        },
      },
    ],
  };

  return (
    <>
      <h4 className="py-5 px-4 text-lg font-semibold antialiased">
        Annual Sales Report
      </h4>
      <div>
      <h4 className="h3">
        SALES (IN THOUSANDS)
      </h4>
      </div>
      <div className="px-7">
        <Line {...config} style={{marginLeft:"15px"}}/>
        <Row>
          <Col>
            <h4 className="py-5 px-4 text-lg font-semibold antialiased" style={{textAlign:"center"}}>
              YEAR
            </h4>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Annual
