import React, { useState } from 'react'
import { Header, Sidebar } from '@components'

export const Layout = ({ children }: { children: React.ReactNode }) => {
  // state chung cho sidebar
  const [collapsed, setCollapsed] = useState(false)

  return (
    <div className="flex-grow-1">
      <Header collapsed={collapsed} setCollapsed={setCollapsed} />
      <Sidebar collapsed={collapsed} />

      <main className="p-3">{children}</main>
    </div>
  )
}
