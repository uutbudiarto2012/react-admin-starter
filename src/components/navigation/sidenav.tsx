import { useMediaQuery, useOnClickOutside } from 'usehooks-ts'
import { cn } from "@/lib/utils"
import Logo from "../Logo"
import Sidemenu from "./sidemenu"
import { useGlobalStore } from "@/store/useGlobalStore"
import { useRef } from 'react'
const Sidenav = () => {
  const matches = useMediaQuery('(max-width: 992px)')
  const ref = useRef(null)
  const { openSideMenu, isOpenSideMenu } = useGlobalStore()

  const handleClickOutside = () => {
    if (isOpenSideMenu) {
      openSideMenu()
    }
  }
  useOnClickOutside(ref, handleClickOutside)
  return (
    <aside ref={ref} className={cn(
      matches ? "w-[80px]" : "md:w-[250px]",
      "transition duration-300 rounded-r-3xl",
      "fixed md:sticky z-40",
      isOpenSideMenu ? "-translate-x-0" : '-translate-x-full ',
      "md:-translate-x-0",
      "bg-slate-800 text-slate-200 h-screen top-0"
    )}>
      <div className="flex flex-col h-full">
        <header className="h-[75px] flex items-center px-3">
          <Logo color="white" />
        </header>
        <div className="flex-1 h-full w-full overflow-auto">
          <Sidemenu />
        </div>
        <div className="h-[50px] bg-slate-900 rounded-br-3xl flex items-center justify-center px-4 text-xs text-slate-200 gap-x-6">
          {!matches && <div className='flex-1'>Version 1.0.0</div>}
          <div className="font-semibold">By Ejs</div>
        </div>
      </div>
    </aside>
  )
}

export default Sidenav