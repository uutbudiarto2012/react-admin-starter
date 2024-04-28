import CardCounter from "@/components/features/dashboard/CardCounter"
import ChartApplicant from "@/components/features/dashboard/ChartApplicant"
import ChartDonut from "@/components/features/dashboard/ChartDonut"

const DashboardPage = () => {
  return (
    <div>
      <div className="grid grid-cols-2 lg:grid-cols-4 mt-4 gap-2 lg:gap-4">
        <CardCounter count={21029} label={"Applicants"} icon="Users" />
        <CardCounter count={21029} label={"Employees"} icon="BookUser" />
        <CardCounter count={219} label={"Users"} icon="CircleUser" />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-4 mt-4 gap-2 md:gap-4">
        <div className="lg:col-span-3">
          <ChartApplicant />
        </div>
        <div className="space-y-4">
          <ChartDonut series={[12, 3, 4, 5]} label="Performance" />
        </div>
      </div>
    </div>
  )
}

export default DashboardPage