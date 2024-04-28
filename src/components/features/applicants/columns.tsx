"use client"
import { ColumnDef } from "@tanstack/react-table"

export type TApplicant = {
  id: string
  name: string
  phone: string
  email: string
  status: "pending" | "processing" | "success" | "failed"
}

export const columns: ColumnDef<TApplicant>[] = [
  {
    accessorKey: "name",
    header: "Fullname",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "phone",
    header: "Phone",
  },
  {
    accessorKey: "status",
    header: "Status",
  },
]