import CardContainer from "@/components/containers/CardContainer"
import { useState } from "react"
import ReactApexChart from "react-apexcharts"

const ChartDonut = ({
  label,
  series
}: {
  label: string,
  series: number[]
}) => {
  const [options] = useState({
    legend: {
      show: false
    },
    responsive: [{
      breakpoint: 480,
      options: {
        chart: {
          width: 200
        },
        legend: {
          position: 'bottom'
        }
      }
    }]
  })
  return (
    <CardContainer>
      <div className="flex items-center justify-center">
        <h2 className="text-center text-xl font-semibold">
          {label}
        </h2>
      </div>
      <ReactApexChart
        options={options}
        series={series}
        type="donut"
      />
    </CardContainer>
  )
}

export default ChartDonut