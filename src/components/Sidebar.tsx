import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { RxHamburgerMenu } from 'react-icons/rx'
import '@assets/styles/sidebar.css'
import { sidebarData } from '../mocks'
import { SubMenu } from './SubMenu'

interface ISidebarProps {
  showIconsWhenClosed?: boolean
}

export const Sidebar: React.FC<ISidebarProps> = ({ showIconsWhenClosed = false }) => {
  const { t } = useTranslation()
  const [collapsed, setCollapsed] = useState(false)

  return (
    <>
      {/* Phone collapse button */}
      <button
        className="btn btn-light d-md-none mb-2"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#sidebarOffcanvas"
        aria-controls="sidebarOffcanvas"
      >
        <RxHamburgerMenu size={22} />
      </button>

      {/* Phone sidebar menu */}
      <div
        className="offcanvas offcanvas-start d-md-none"
        tabIndex={-1}
        id="sidebarOffcanvas"
        aria-labelledby="sidebarOffcanvasLabel"
        style={{ width: '240px' }}
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
        className={`d-none d-md-flex d-flex flex-column flex-shrink-0 p-2 `}
        style={{
          width: collapsed ? '60px' : '240px',
          height: '100vh',
          transition: 'width 0.1s',
          overflowX: 'hidden',
        }}
      >
        {/* Collapse/Expand button */}

        <button
          className="btn btn-light mb-2 align-self-start"
          onClick={() => setCollapsed((prev) => !prev)}
          aria-label={collapsed ? t('expandSidebar') : t('collapseSidebar')}
        >
          <RxHamburgerMenu size={22} />
        </button>

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
