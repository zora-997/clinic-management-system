import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

const LineChart = ({ chartData, options }) => {

    return (
        <div className="chart  shrink-0 sm:pt-5 sm:h-full flex flex-1 justify-start rounded-2xl   bg-white  shadow-sm shadow-gray-200  p-3">
            <Line className="flex-1  shrink-0 sm:h[15rem]" data={chartData} options={options} height={135} width={330} />
        </div>
    )
}

export default LineChart