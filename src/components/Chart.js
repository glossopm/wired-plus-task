import * as React from "react";
import PropTypes from "prop-types";

import { BarChart, Bar, CartesianGrid, XAxis, YAxis } from "recharts";

const Chart = ({ data }) => {
  return (
    <BarChart width={600} height={600} data={data}>
      <Bar dataKey="value" fill="green" />
      <CartesianGrid stroke="#ccc" />
      <XAxis dataKey="name" />
      <YAxis />
    </BarChart>
  );
};

Chart.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      value: PropTypes.number.isRequired,
    })
  ),
};

export default Chart;
