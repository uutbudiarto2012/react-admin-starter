import { useGlobalStore } from "@/store/useGlobalStore"
import { useLocation } from "react-router-dom"
import Icon from "../Icon"
import { DropdownMenuTopnav } from "./dropdown-menu-topnav"
import { MyBreadcrumb } from "./mybreadcrumb"

const Topnav = () => {
  const location = useLocation()
  const labelPage = location.pathname.split("/")[1]
  const { openSideMenu, isOpenSideMenu } = useGlobalStore()
  function handleOpenMenu() {
    openSideMenu()
  }
  return (
    <nav className="sticky top-0 z-30 bg-white md:bg-slate-100">
      <div className="h-[45px] md:h-[50px] flex items-center justify-between mx-container">
        <h1 className="text-xl md:text-2xl font-medium text-slate-800 capitalize">
          {labelPage ? labelPage : 'Dashboard'}
        </h1>
        <div className="flex gap-2">
          <DropdownMenuTopnav />
          {
            isOpenSideMenu ? (
              <div className="h-8 w-8 flex md:hidden items-center justify-center bg-slate-800 text-white rounded-xl">
                <Icon name="X" />
              </div>
            ) : (
              <button onClick={handleOpenMenu} className="h-8 w-8 flex md:hidden items-center justify-center bg-slate-800 text-white rounded-xl">
                <Icon name="Menu" />
              </button>
            )
          }

        </div>
      </div>
      <div className="h-[25px] md:h-[30px] flex items-center mx-container">
        <MyBreadcrumb />
      </div>
    </nav>
  )
}

export default Topnav