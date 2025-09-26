import React, { useState } from 'react'
import { Header, Sidebar, TagList } from '@components'

export const Layout = ({ children }: { children: React.ReactNode }) => {
  const [collapsed, setCollapsed] = useState(false)

  return (
    <div className="flex-grow-1">
      <Header collapsed={collapsed} setCollapsed={setCollapsed} />
      <TagList />
      <Sidebar collapsed={collapsed} />

      <main className="p-3">{children}</main>
    </div>
  )
}
