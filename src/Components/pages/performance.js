import React from "react";
import Nav from "./dashboardNavbar";
import {ResponsiveContainer, Linechart, Line} from 'rechcarts';

const Navbar = () => {

  return (
    <div>
      < Nav />
      <div className="page-heading">
        <div className="perform-heading">Performance</div>
      </div>

      <>
        <h1 className="chart-heading">Line Chart</h1>
        <ResponsiveContainer width="100%" aspect={3}>
          <LineChart>
        </ResponsiveContainer> 
      </>
    </div>
  );
};

export default Navbar;
