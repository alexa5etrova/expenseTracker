import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {
  let dataPointsValues = props.dataPoints.map((item) => item.value);
  console.log(dataPointsValues);
  let maxValue = Math.max(...dataPointsValues);

  return (
    <div className="chart">
      {props.dataPoints.map((item) => (
        <ChartBar
          key={item.label}
          value={item.value}
          maxValue={maxValue}
          label={item.label}
        />
      ))}
    </div>
  );
};

export default Chart;
