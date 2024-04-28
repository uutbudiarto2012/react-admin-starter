export type TMenu = {
  label: string,
  icon: string,
  path: string,
  level: number,
  group: string,
  children?: TSubmenu[]
}

export type TSubmenu = {
  label: string,
  icon: string,
  path: string,
  level: number,
  group: string,
  children?: TSubSubmenu[]
}
export type TSubSubmenu = {
  label: string,
  icon?: string,
  path: string,
  group: string,
  level: number
}

export const menus: TMenu[] = [
  {
    label: "Dashboard",
    icon: "Gauge",
    path: "/",
    group: "dashboard",
    level: 0
  },
  {
    label: "Employee",
    icon: "BookUser",
    path: "employee",
    level: 0,
    group: "employee",
    children: [
      {
        label: "Employee List",
        icon: "Airplay",
        path: "/employee",
        level: 1,
        group: "employee"
      },
      {
        label: "Applicant",
        icon: "Airplay",
        path: "/applicant",
        level: 1,
        group: "employee"
      },
    ]
  },
  // {
  //   label: "Users",
  //   icon: "Users",
  //   path: "users",
  //   level: 0,
  //   children: [
  //     {
  //       label: "Setting",
  //       icon: "Settings2",
  //       path: "/users/setting",
  //       level: 1,
  //       children: [
  //         {
  //           label: "Account",
  //           path: "/users/setting/account",
  //           level: 2,
  //         },
  //         {
  //           label: "Social Media",
  //           path: "/users/setting/social",
  //           level: 2,
  //         },
  //       ]
  //     }
  //   ]
  // },
]