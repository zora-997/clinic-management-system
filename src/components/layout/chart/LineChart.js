import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

const LineChart = ({ chartData, options }) => {

    return (
        <div className="chart h-[16.5rem]  flex justify-center rounded-3xl w-full  bg-white  shadow-sm shadow-gray-200  p-4">
            <Line data={chartData} options={options} height={90} width={300} />
        </div>
    )
}

export default LineChart