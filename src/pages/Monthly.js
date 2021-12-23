import { Column } from "@ant-design/charts";
import data from "../dummy_data/monthly";
import { Row, Col } from "antd";
import "../css/monthly.css";

// Column chart
const Monthly = () => {
  const config = {
    data,
    isGroup: true,
    xField: "month",
    yField: "revenue",
    seriesField: "name",

    /** 设置颜色 */
    //color: ['#1ca9e6', '#f88c24'],

    /** 设置间距 */
    // marginRatio: 0.1,
    label: {
      // 可手动配置 label 数据标签位置
      position: "middle",
      // 'top', 'middle', 'bottom'
      // 可配置附加的布局方法
      layout: [
        // 柱形图数据标签位置自动调整
        {
          type: "interval-adjust-position",
        }, // 数据标签防遮挡
        {
          type: "interval-hide-overlap",
        }, // 数据标签文颜色自动调整
        {
          type: "adjust-color",
        },
      ],
    },
  };

  return (
    <>
      <h4 className="py-5 px-4 text-lg font-semibold antialiased">
        Monthly Sales Report
      </h4>
      <div className="px-7">
      <div>
      <h4 className="h3">
        SALES (IN THOUSANDS)
      </h4>
      </div>
        <Column {...config} style={{marginLeft:"10px"}}/>
        <Row>
          <Col>
            <h4 className="py-5 px-4 text-lg font-semibold antialiased" style={{textAlign:"center"}}>
              MONTH
            </h4>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Monthly;
