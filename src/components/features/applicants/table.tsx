import { DataTable } from "@/components/datatable"
import { TApplicant, columns } from "./columns"
import { useState } from "react"
import Pagination from "@/components/datatable/pagination"

const TableApplicant = () => {
  const [data] = useState<TApplicant[]>([
    {
      id: "1",
      name: "Eko Wijaya",
      email: "ekowijaya@gmail.com",
      phone: '0897887868',
      status: "pending"
    },
  ])

  const onPageChange = ({ selected }: { selected: number }) => {
    console.log(selected)
  }
  return (
    <div className="my-2">
      <DataTable columns={columns} data={data} />
      <Pagination
        currentPage={1}
        pageCount={1000}
        onPageChange={onPageChange}
      />
    </div>
  )
}

export default TableApplicant