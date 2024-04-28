import Sidenav from "@/components/navigation/sidenav"
import Topnav from "@/components/navigation/topnav"
import { Outlet } from "react-router-dom"

const AdminLayout = () => {
  return (
    <div className="flex bg-slate-100 min-h-screen">
      <Sidenav />
      <div className="flex-1 w-full overflow-x-hidden">
        <div>
          <Topnav />
          <main className="mx-container">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  )
}

export default AdminLayout