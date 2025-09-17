import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import {
  MdOutlineSubscriptions,
  MdHistory,
  MdPlaylistPlay,
  MdOutlineWatchLater,
} from 'react-icons/md'
import { SiYoutubeshorts } from 'react-icons/si'
import { IoMusicalNotesOutline, IoSettingsOutline } from 'react-icons/io5'
import { LiaGamepadSolid, LiaDownloadSolid } from 'react-icons/lia'
import { AiOutlineLike } from 'react-icons/ai'
import { SlHome } from 'react-icons/sl'
import { PiNewspaperClippingLight } from 'react-icons/pi'
import { GoTrophy } from 'react-icons/go'
import { FaRegFlag } from 'react-icons/fa'
import { HiOutlineQuestionMarkCircle } from 'react-icons/hi2'
import { RiFeedbackLine } from 'react-icons/ri'
import { RxHamburgerMenu } from 'react-icons/rx'
import '@assets/styles/sidebar.css'

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
          <ul className="nav nav-pills flex-column mb-auto">
            <li>
              <a href="#" className="nav-link text-dark d-flex align-items-center sidebar-hover">
                <SlHome size={22} className="me-3" />
                {t('home')}
              </a>
            </li>
            <li>
              <a href="#" className="nav-link text-dark d-flex align-items-center sidebar-hover">
                <SiYoutubeshorts size={22} className="me-3" />
                {t('shorts')}
              </a>
            </li>
            <li>
              <a href="#" className="nav-link text-dark d-flex align-items-center sidebar-hover">
                <MdOutlineSubscriptions size={22} className="me-3" />
                {t('subscriptions')}
              </a>
            </li>
          </ul>

          {/* Phone profile menu */}
          <hr />
          {!collapsed && <h6 className="px-2 text-muted">{t('you')}</h6>}
          <ul className="nav nav-pills flex-column mb-auto">
            <li>
              <a href="#" className="nav-link text-dark d-flex align-items-center sidebar-hover">
                <MdHistory size={22} className="me-3" />
                {t('history')}
              </a>
            </li>
            <li>
              <a href="#" className="nav-link text-dark d-flex align-items-center sidebar-hover">
                <MdPlaylistPlay size={22} className="me-3" />
                {t('playlist')}
              </a>
            </li>
            <li>
              <a href="#" className="nav-link text-dark d-flex align-items-center sidebar-hover">
                <MdOutlineWatchLater size={22} className="me-3" />
                {t('watchLater')}
              </a>
            </li>
            <li>
              <a href="#" className="nav-link text-dark d-flex align-items-center sidebar-hover">
                <AiOutlineLike size={22} className="me-3" />
                {t('liked')}
              </a>
            </li>
            <li>
              <a href="#" className="nav-link text-dark d-flex align-items-center sidebar-hover">
                <LiaDownloadSolid size={22} className="me-3" />
                {t('downloads')}
              </a>
            </li>
          </ul>

          {/* Phone explore menu */}
          <hr />
          {!collapsed && <h6 className="px-2 text-muted">{t('explore')}</h6>}
          <ul className="nav nav-pills flex-column mb-auto">
            <li>
              <a href="#" className="nav-link text-dark d-flex align-items-center sidebar-hover">
                <IoMusicalNotesOutline size={22} className="me-3" />
                {t('music')}
              </a>
            </li>
            <li>
              <a href="#" className="nav-link text-dark d-flex align-items-center sidebar-hover">
                <LiaGamepadSolid size={22} className="me-3" />
                {t('gaming')}
              </a>
            </li>
            <li>
              <a href="#" className="nav-link text-dark d-flex align-items-center sidebar-hover">
                <PiNewspaperClippingLight size={22} className="me-3" />
                {t('news')}
              </a>
            </li>
            <li>
              <a href="#" className="nav-link text-dark d-flex align-items-center sidebar-hover">
                <GoTrophy size={22} className="me-3" />
                {t('sports')}
              </a>
            </li>
          </ul>

          {/* Phone settings menu */}
          <hr />
          <ul className="nav nav-pills flex-column mb-auto">
            <li>
              <a href="#" className="nav-link text-dark d-flex align-items-center sidebar-hover">
                <IoSettingsOutline size={22} className="me-3" />
                {t('settings')}
              </a>
            </li>
            <li>
              <a href="#" className="nav-link text-dark d-flex align-items-center sidebar-hover">
                <FaRegFlag size={22} className="me-3" />
                {t('reportHistory')}
              </a>
            </li>
            <li>
              <a href="#" className="nav-link text-dark d-flex align-items-center">
                <HiOutlineQuestionMarkCircle size={22} className="me-3" />
                {t('help')}
              </a>
            </li>
            <li>
              <a href="#" className="nav-link text-dark d-flex align-items-center">
                <RiFeedbackLine size={22} className="me-3" />
                {t('sendFeedback')}
              </a>
            </li>
          </ul>
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
            <ul className="nav nav-pills flex-column mb-auto">
              <li>
                <a href="#" className="nav-link text-dark d-flex align-items-center sidebar-hover">
                  <SlHome size={22} className="me-3" />
                  {!collapsed && t('home')}
                </a>
              </li>
              <li>
                <a href="#" className="nav-link text-dark d-flex align-items-center sidebar-hover">
                  <SiYoutubeshorts size={22} className="me-3" />
                  {!collapsed && t('shorts')}
                </a>
              </li>
              <li>
                <a href="#" className="nav-link text-dark d-flex align-items-center sidebar-hover">
                  <MdOutlineSubscriptions size={22} className="me-3" />
                  {!collapsed && t('subscriptions')}
                </a>
              </li>
            </ul>

            {/* Profile menu */}
            <hr />
            {!collapsed && <h6 className="px-2 text-muted">{t('you')}</h6>}
            <ul className="nav nav-pills flex-column mb-auto">
              <li>
                <a href="#" className="nav-link text-dark d-flex align-items-center sidebar-hover">
                  <MdHistory size={22} className="me-3" />
                  {!collapsed && t('history')}
                </a>
              </li>
              <li>
                <a href="#" className="nav-link text-dark d-flex align-items-center sidebar-hover">
                  <MdPlaylistPlay size={22} className="me-3" />
                  {t('playlist')}
                </a>
              </li>
              <li>
                <a href="#" className="nav-link text-dark d-flex align-items-center sidebar-hover">
                  <MdOutlineWatchLater size={22} className="me-3" />
                  {t('watchLater')}
                </a>
              </li>
              <li>
                <a href="#" className="nav-link text-dark d-flex align-items-center sidebar-hover">
                  <AiOutlineLike size={22} className="me-3" />
                  {t('liked')}
                </a>
              </li>
              <li>
                <a href="#" className="nav-link text-dark d-flex align-items-center sidebar-hover">
                  <LiaDownloadSolid size={22} className="me-3" />
                  {!collapsed && t('downloads')}
                </a>
              </li>
            </ul>

            {/* Explore menu */}
            <hr />
            {!collapsed && <h6 className="px-2 text-muted">{t('explore')}</h6>}
            <ul className="nav nav-pills flex-column mb-auto">
              <li>
                <a href="#" className="nav-link text-dark d-flex align-items-center sidebar-hover">
                  <IoMusicalNotesOutline size={22} className="me-3" />
                  {t('music')}
                </a>
              </li>
              <li>
                <a href="#" className="nav-link text-dark d-flex align-items-center sidebar-hover">
                  <LiaGamepadSolid size={22} className="me-3" />
                  {t('gaming')}
                </a>
              </li>
              <li>
                <a href="#" className="nav-link text-dark d-flex align-items-center sidebar-hover">
                  <PiNewspaperClippingLight size={22} className="me-3" />
                  {t('news')}
                </a>
              </li>
              <li>
                <a href="#" className="nav-link text-dark d-flex align-items-center sidebar-hover">
                  <GoTrophy size={22} className="me-3" />
                  {t('sports')}
                </a>
              </li>
            </ul>

            {/* Settings menu */}
            <hr />
            <ul className="nav nav-pills flex-column mb-auto">
              <li>
                <a href="#" className="nav-link text-dark d-flex align-items-center sidebar-hover">
                  <IoSettingsOutline size={22} className="me-3" />
                  {t('settings')}
                </a>
              </li>
              <li>
                <a href="#" className="nav-link text-dark d-flex align-items-center sidebar-hover">
                  <FaRegFlag size={22} className="me-3" />
                  {t('reportHistory')}
                </a>
              </li>
              <li>
                <a href="#" className="nav-link text-dark d-flex align-items-center">
                  <HiOutlineQuestionMarkCircle size={22} className="me-3" />
                  {t('help')}
                </a>
              </li>
              <li>
                <a href="#" className="nav-link text-dark d-flex align-items-center">
                  <RiFeedbackLine size={22} className="me-3" />
                  {t('sendFeedback')}
                </a>
              </li>
            </ul>
          </>
        )}
      </div>
    </>
  )
}
