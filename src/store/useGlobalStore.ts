import { create } from 'zustand'

type Store = {
  isOpenSideMenu: boolean
  openSideMenu: () => void
}

export const useGlobalStore = create<Store>()((set) => ({
  isOpenSideMenu: false,
  openSideMenu: () => set((state) => ({ isOpenSideMenu: !state.isOpenSideMenu })),
}))