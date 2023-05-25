import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

const LineChart = ({ chartData, options }) => {

    return (
        <div className="chart h-[15rem]   flex justify-start rounded-2xl w-fit  bg-white  shadow-sm shadow-gray-200  p-4">
            <Line data={chartData} options={options} height={105} width={360} />
        </div>
    )
}

export default LineChart