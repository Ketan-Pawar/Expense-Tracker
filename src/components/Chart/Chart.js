import React from "react";

import BarChart from './BarChart';
import './Chart.css';

const Chart = (props) => {
    const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value);
    const totalMaximum = Math.max(...dataPointValues);

    return (
        <div className="chart">
            {props.dataPoints.map((dataPoint) => (
                <BarChart 
                    key={dataPoint.lable}
                    value={dataPoint.value} 
                    maxValue={totalMaximum}
                    lable={dataPoint.lable} 
                />
                ))}
        </div>
    );
};

export default Chart;


