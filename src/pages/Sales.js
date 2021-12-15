import { Column } from "@ant-design/charts";
import data from '../dummy_data/sales';

// Column chart
const Sales = () => {
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
    <div style={{ padding: "5%" }}>
      <Column {...config} />
    </div>
  );
}

export default Sales
