import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { RxHamburgerMenu } from 'react-icons/rx'
import '@assets/styles/sidebar.css'
import { menu1, menu2, menu3, menu4 } from '../mocks'
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
          <SubMenu items={menu1(t)} />

          {/* Phone profile menu */}
          <hr />
          {!collapsed && <h6 className="px-2 text-muted">{t('you')}</h6>}
          <SubMenu items={menu2(t)} />

          {/* Phone explore menu */}
          <hr />
          {!collapsed && <h6 className="px-2 text-muted">{t('explore')}</h6>}
          <SubMenu items={menu3(t)} />

          {/* Phone settings menu */}
          <hr />
          <SubMenu items={menu4(t)} />
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
        {(!collapsed || showIconsWhenClosed) && (
          <>
            <hr />
            {/* Main menu */}
            <SubMenu items={menu1(t)} collapsed={collapsed} />

            {/* Profile menu */}
            <hr />
            {!collapsed && <h6 className="px-2 text-muted">{t('you')}</h6>}
            <SubMenu items={menu2(t)} collapsed={collapsed} />

            {/* Explore menu */}
            <hr />
            {!collapsed && <h6 className="px-2 text-muted">{t('explore')}</h6>}
            <SubMenu items={menu3(t)} collapsed={collapsed} />

            {/* Settings menu */}
            <hr />
            <SubMenu items={menu4(t)} collapsed={collapsed} />
          </>
        )}
      </div>
    </>
  )
}
