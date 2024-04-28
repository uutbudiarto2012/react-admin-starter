import { useLocalStorage, useMediaQuery } from 'usehooks-ts'
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import Icon from '../Icon';
import { cn } from '@/lib/utils';
import { TMenu, TSubSubmenu, TSubmenu, menus } from '@/constants/menu';
import { Fragment } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { useGlobalStore } from '@/store/useGlobalStore';

const Sidemenu = () => {
  const location = useLocation()
  const [value, setValue] = useLocalStorage<TMenu | TSubmenu | TSubSubmenu | undefined>('item-menu-selected', undefined)
  const { openSideMenu, isOpenSideMenu } = useGlobalStore()
  const matches = useMediaQuery('(max-width: 992px)')

  const PATHNAME = location.pathname
  const SEGMENT_1 = PATHNAME.split("/")[1]


  const handleClickLick = (props: TMenu | TSubmenu | TSubSubmenu) => {
    if (isOpenSideMenu) {
      openSideMenu()
    }
    setValue(props)
  }
  return (
    <div className='bg-slate-800 w-full'>
      <Sidebar
        collapsed={matches}
        rootStyles={{
          width: "250px",
          borderRight: 'none',
          fontSize: 15,
          backgroundColor: "#1e293b",
          '&:hover': {
            backgroundColor: '#1e293b',
          }
        }}>
        <Menu
          renderExpandIcon={({ open, level }) => {
            if (level === 0) {
              return (
                <Icon name='ChevronRight' className={cn(
                  "w-4 h-4 duration-300",
                  open ? "rotate-90" : 'rotate-0'
                )} />

              )
            }
            if (level === 1) {
              return (
                <Icon name={open ? 'Minus' : 'Plus'} className={cn(
                  "w-4 h-4"
                )} />

              )
            }
          }}
          menuItemStyles={{
            button: ({ active }) => {
              return {
                height: 43,
                color: active ? '#1e293b' : '#f8fafc',
                backgroundColor: active ? '#f8fafc' : undefined,
                '&:hover': {
                  color: active ? '#1e293b' : '#f8fafc',
                  backgroundColor: active ? '#f8fafc' : '#334155',
                }
              }
            },
          }}
        >
          {
            menus.map((menu, index) => {
              return (
                <Fragment key={index}>
                  {
                    menu.children && menu.children?.length > 0 ? (
                      <SubMenu defaultOpen={menu.group === value?.group} icon={<Icon name={menu.icon} />} rootStyles={{
                        backgroundColor: '#1e293b',
                        color: '#f8fafc',
                        '&:hover': {
                          color: "#f8fafc",
                          backgroundColor: '#1e293b',
                        }
                      }} label={menu.label}>
                        {
                          menu.children.map((submenu, index) => {
                            return (
                              <Fragment key={index}>
                                {
                                  submenu.children && submenu.children.length ? (
                                    <SubMenu
                                      prefix={<Icon name={submenu.icon} />}
                                      rootStyles={{
                                        backgroundColor: '#1e293b',
                                        color: '#f8fafc',
                                        '&:hover': {
                                          color: "#f8fafc",
                                          backgroundColor: '#1e293b',
                                        }
                                      }} label={submenu.label}>
                                      {
                                        submenu.children.map((subsubmenu, index) => (
                                          <MenuItem
                                            component={<NavLink onClick={() => handleClickLick(subsubmenu)} to={subsubmenu.path} />}
                                            key={index}
                                            rootStyles={{
                                              backgroundColor: '#1e293b',
                                              color: '#f8fafc',
                                              '&:hover': {
                                                backgroundColor: '#1e293b',
                                              }
                                            }}
                                          > {subsubmenu.label}</MenuItem>
                                        ))
                                      }
                                    </SubMenu>
                                  ) : (
                                    <MenuItem
                                      active={SEGMENT_1 === submenu.path.split("/")[1]}
                                      component={<NavLink onClick={() => handleClickLick(submenu)} to={submenu.path} />}
                                      rootStyles={{
                                        backgroundColor: '#1e293b',
                                        color: '#f8fafc',
                                        '&:hover': {
                                          backgroundColor: '#1e293b',
                                        }
                                      }}
                                    > {submenu.label}</MenuItem>
                                  )
                                }
                              </Fragment>
                            )
                          })
                        }
                      </SubMenu>
                    ) : (
                      <MenuItem
                        active={SEGMENT_1 === menu.path.split("/")[1]}
                        component={<NavLink onClick={() => handleClickLick(menu)} to={menu.path} />}
                        icon={<Icon name={menu.icon} />}
                        rootStyles={{
                          backgroundColor: '#1e293b',
                          color: '#f8fafc',
                          '&:hover': {
                            backgroundColor: '#1e293b',
                          }
                        }}
                      >{menu.label}</MenuItem>
                    )
                  }
                </Fragment>
              )
            })
          }
        </Menu>
      </Sidebar>
    </div >
  )
}
export default Sidemenu