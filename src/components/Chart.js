import React, { Component } from "react";
import CanvasJSReact from "../assets/canvasjs.react";
import "../App.scss";
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

class SplineChart extends Component {
  render() {
    
    // const style={
    //     display:"block",
    // }
    const options = {
      animationEnabled: true,
      title: {
        text: null,
      },
      axisX: {
        valueFormatString: "###",
      },
      axisY: {
        title: "",
        gridColor: "#F5F5F7",
        includeZero: false,
      },
    
      data: [
        {
          lineColor: "#0C0B0B",
          yValueFormatString: "#h",
          xValueFormatString: "",
          type: "spline",
          dataPoints: [
            { label: "mon", y: 1, markerColor: "#0C0B0B" },
            { label: "tue", y: 1, markerColor: "#0C0B0B" },
            { label: "wed", y: 2, markerColor: "#0C0B0B" },
            { label: "thu", y: 1, markerColor: "#0C0B0B" },
            { label: "fri", y: 4, markerColor: "#0C0B0B" },
            { label: "sat", y: 3, markerColor: "#0C0B0B" },
            { label: "sun", y: 2, markerColor: "#0C0B0B" },
          ],
        },
      ],
    };
    const containerProps = {
      height: "22rem",
      display:"block",

    };

    return (
      <div className="chart">
        <CanvasJSChart containerProps={containerProps}
          options={options}
           onRef={ref => this.chart = ref} 
        />
        {/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
      </div>
    );
  }
}

export default SplineChart;
