import React from "react";
import PieCharts from "./PieCharts";
import ColumnChart from "./ColumnChart";
import LineChart from "./LineChart";


const Dashboard = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <div>
        <PieCharts />
      </div>
      <div>
        <ColumnChart />
      </div>
      <div>
        <LineChart/>
      </div>
    </div>
  );
};

export default Dashboard;
