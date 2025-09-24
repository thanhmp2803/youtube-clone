import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { RxHamburgerMenu } from 'react-icons/rx'
import '@assets/styles/sidebar.css'
import { sidebarData } from '../mocks'
import { SubMenu } from './SubMenu'

interface ISidebarProps {
  showIconsWhenClosed?: boolean
  collapsed?: boolean
}

export const Sidebar: React.FC<ISidebarProps> = ({
  showIconsWhenClosed = false,
  collapsed: collapsedProp,
}) => {
  const { t } = useTranslation()
  const [internalCollapsed] = useState(false)
  const collapsed = typeof collapsedProp === 'boolean' ? collapsedProp : internalCollapsed

  return (
    <>
      {/* Phone sidebar menu */}
      <div
        className="offcanvas offcanvas-start d-md-none phone-sidebar"
        tabIndex={-1}
        id="sidebarOffcanvas"
        aria-labelledby="sidebarOffcanvasLabel"
      >
        <div className="offcanvas-header">
          <button
            type="button"
            className="sidebar-close-btn"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          >
            <RxHamburgerMenu size={22} />
          </button>
        </div>
        <div className="offcanvas-body p-0">
          {sidebarData(t).map((menu, index) => (
            <React.Fragment key={index}>
              {menu.separator && <hr />}
              {menu.title && <h6 className="px-2 text-muted">{menu.title}</h6>}
              <SubMenu items={menu.items} />
            </React.Fragment>
          ))}
        </div>
      </div>

      <div
        className={`d-none d-md-flex d-flex flex-column flex-shrink-0 p-2 sidebar ${collapsed ? 'collapsed' : ''}`}
      >
        {/* Content when expanded or showIconsWhenClosed */}
        {(!collapsed || showIconsWhenClosed) &&
          sidebarData(t).map((menu, index) => (
            <React.Fragment key={index}>
              {menu.separator && <hr />}
              {!collapsed && menu.title && <h6 className="px-2 text-muted">{menu.title}</h6>}
              <SubMenu items={menu.items} collapsed={collapsed} />
            </React.Fragment>
          ))}
      </div>
    </>
  )
}
