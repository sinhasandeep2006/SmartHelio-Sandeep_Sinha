import React from 'react'
import BackendConnected from '../components/BackendConnected'
import DefaultButton from '../components/DefaultButton'
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
} from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement);
import { Doughnut} from "react-chartjs-2";

const HomePage = () => {
    const pieData = {
    
    datasets: [
      {
        label: "Tasks",
        data: [2],
        backgroundColor: ["#22c55e"],
        borderWidth: 0,
      },
    ],
  };
     
const pieOptions = {
  plugins: {
    legend: {
      labels: {
        font: {
          size: 8.5, 
        },
        color: "#555", 
        boxWidth: 10, 
      },
      position: "top",    },
  } 
};

  return (
    <div className="flex w-full h-full bg-white rounded-3xl shadow-md overflow-hidden">
      

     
        {/* Stats */}
        <div className="flex items-center gap-7 mb-2">
          <div className="bg-red-500  shadow rounded-md px-2 py-1">
            <p className="text-xs font-bold text-gray-800 text-center"></p>
            <p className="text-xs text-gray-500 text-center">RED</p>
          </div>
          <div className="bg-green-500 shadow rounded-md px-2 py-1">
            <p className="text-xs font-bold text-gray-800 text-center"></p>
            <p className="text-xs text-gray-500 text-center">Green</p>
          </div>
          <div className="bg-blue-600 shadow rounded-md px-2 py-1">
            <p className="text-xs font-bold text-gray-800 text-center"></p>
            <p className="text-xs text-gray-500 text-center">Blue</p>
          </div>
          <div className="bg-white shadow rounded-md px-2 py-1">
            <p className="text-xs font-bold text-gray-800 text-center">2</p>
            <p className="text-xs text-gray-500 text-center">Backend-connected</p>
          </div>
        </div>

        {/* Charts */}
        <div className="grid grid-cols-2 gap-1 mb-1">
            <h4 className="font-semibold text-sm text-gray-700 mb-1">color changer</h4>
            <div className="w-[200px] h-[200px] mx-auto">
  <Doughnut data={pieData} options={pieOptions} />
</div>
</div>
</div>
  )
}

export default HomePage





