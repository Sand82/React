import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = ({ dataPoints }) => {
  const dataPointValues = dataPoints.map((el) => el.value);
  const totamMaximum = Math.max(...dataPointValues);

  console.log(dataPoints);

  return (
    <div className="chart">
      {dataPoints.map((el) => (
        <ChartBar
          key={el.label}
          value={el.value}
          maxValue={totamMaximum}
          label={el.label}
        />
      ))}
    </div>
  );
};

export default Chart;
