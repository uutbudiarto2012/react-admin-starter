import Chart from "react-apexcharts";
import CardContainer from "@/components/containers/CardContainer"
import { useState } from "react";
const ChartApplicant = () => {
  const [options] = useState({
    colors: ['#1e293b', '#f97316'],
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '50%',
        borderRadius: 5,
      },
    },
    chart: {
      id: "basic-bar"
    },
    xaxis: {
      categories: [2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024]
    }
  })
  const [series] = useState([
    {
      name: "Failed",
      data: [30, 40, 45, 50, 49, 60, 70, 71, 30]
    },
    {
      name: "Passed",
      data: [12, 32, 40, 43, 49, 50, 60, 63, 20]
    },
  ])
  return (
    <CardContainer>
      <div>
        <h2 className="text-xl font-semibold">Applicants</h2>
      </div>
      <div>
        <Chart
          options={options}
          series={series}
          type="bar"
          width="100%"
        />
      </div>
    </CardContainer>
  )
}

export default ChartApplicant