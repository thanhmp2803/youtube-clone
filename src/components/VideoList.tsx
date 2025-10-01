import React from 'react'
import { VideoCard } from './VideoCard'
import { generateVideoData } from '@mocks'
import { useTranslation } from 'react-i18next'

export const VideoList: React.FC = () => {
  const { t } = useTranslation()
  const videos = generateVideoData(t)

  return (
    <div className="container-fluid">
      <div className="row">
        {videos.map((video) => (
          <div key={video.id} className="col-12 col-md-6 col-lg-4 mb-3">
            <VideoCard video={video} />
          </div>
        ))}
      </div>
    </div>
  )
}
