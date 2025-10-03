import { Routes, Route } from 'react-router-dom'

import { Login, VideoList } from '@components'

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<VideoList />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  )
}
