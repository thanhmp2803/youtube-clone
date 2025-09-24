import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { RxHamburgerMenu } from 'react-icons/rx'
import { FaYoutube } from 'react-icons/fa'
import { CiSearch } from 'react-icons/ci'
import { BiSolidMicrophone, BiVideoPlus } from 'react-icons/bi'
import { IoNotificationsOutline, IoArrowBack } from 'react-icons/io5'
import '@assets/styles/header.css'

interface HeaderProps {
  collapsed: boolean
  setCollapsed: React.Dispatch<React.SetStateAction<boolean>>
}

export const Header: React.FC<HeaderProps> = ({ collapsed, setCollapsed }) => {
  const { t } = useTranslation()

  const [showSearch, setShowSearch] = React.useState(false)
  const searchRef = React.useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowSearch(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <header className="d-flex align-items-center justify-content-between py-2 border-bottom sticky-top bg-white flex-nowrap w-100 overflow-x-hidden">
      {/* Left: Button + Logo */}
      <div className="d-flex align-items-center">
        {/* PC collapse button */}
        <div className="d-flex align-items-center">
          <button
            className="btn btn-light mb-2 align-self-start d-none d-md-block"
            onClick={() => setCollapsed((prev) => !prev)}
            aria-label={collapsed ? t('expandSidebar') : t('collapseSidebar')}
          >
            <RxHamburgerMenu size={22} />
          </button>

          {/* Phone collapse button */}
          <button
            className="btn btn-light d-md-none"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#sidebarOffcanvas"
            aria-controls="sidebarOffcanvas"
          >
            <RxHamburgerMenu size={22} />
          </button>

          {/* Logo */}
          <div className="d-flex align-items-center ms-2">
            <FaYoutube size={28} color="red" className="me-1" />
            <span className="fw-bold fs-5">YouTube</span>
          </div>
        </div>
      </div>

      {/* Center: Search bar */}
      <div className="d-flex align-items-center flex-grow-1 px-2">
        {/* PC Search bar */}
        <div className="d-none d-md-flex align-items-center flex-grow-1">
          <div className="input-group">
            <input type="text" className="form-control rounded-start-pill" placeholder="Search" />
            <button className="btn btn-light border rounded-end-pill">
              <CiSearch size={22} />
            </button>
          </div>
          <button className="btn btn-light rounded-circle ms-2">
            <BiSolidMicrophone size={22} />
          </button>
        </div>
        {/* Phone Search bar */}
        <div
          className={`d-flex d-md-none align-items-center ${showSearch ? ' header-mobile-search-overlay' : ''}`}
          ref={searchRef}
        >
          {showSearch ? (
            <div className="d-flex align-items-center w-100">
              <button className="btn btn-light me-2" onClick={() => setShowSearch(false)}>
                <IoArrowBack size={22} />
              </button>
              <div className="input-group">
                <input
                  type="text"
                  className="form-control rounded-start-pill"
                  placeholder="Search"
                />
                <button className="btn btn-light border rounded-end-pill">
                  <CiSearch size={22} />
                </button>
                <button className="btn btn-light rounded-circle ms-2">
                  <BiSolidMicrophone size={22} />
                </button>
              </div>
            </div>
          ) : (
            <button className="btn btn-light rounded-circle" onClick={() => setShowSearch(true)}>
              <CiSearch size={22} />
            </button>
          )}
        </div>
      </div>

      {/* Right: Icons */}
      <div className="d-flex align-items-center">
        <button className="btn text-dark d-flex align-items-center ">
          <BiVideoPlus size={24} />
          <span className="ms-1">Create</span>
        </button>
        <button className="btn text-dark">
          <IoNotificationsOutline size={24} />
        </button>
        <button className="rounded-circle overflow-hidden p-0 m-0 me-2 d-flex justify-content-center align-items-center avatar">
          <img className="avatar-image" src="./images/conmeo.jpg" alt="User avatar" />
        </button>
      </div>
    </header>
  )
}
