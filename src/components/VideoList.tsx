import React, { useState, useEffect, useRef, useCallback } from 'react'
import { VideoCard } from './VideoCard'
import { generateVideoData } from '@mocks'
import { useTranslation } from 'react-i18next'

export const VideoList: React.FC = () => {
  const { t } = useTranslation()
  const videos = generateVideoData(t)
  const [visibleVideos, setVideo] = useState(videos.slice(0, 6))
  const [page, setPage] = useState(1)
  const loaderRef = useRef<HTMLDivElement | null>(null)

  const loadMore = useCallback(() => {
    const nextVideos = videos.slice(page * 6, (page + 1) * 6)
    if (nextVideos.length > 0) {
      setVideo((prev) => [...prev, ...nextVideos])
      setPage((prev) => prev + 1)
    }
  }, [videos, page])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          loadMore()
        }
      },
      { threshold: 1 },
    )

    if (loaderRef.current) observer.observe(loaderRef.current)
    return () => observer.disconnect()
  }, [loadMore])

  return (
    <div className="container-fluid">
      <div className="row">
        {visibleVideos.map((video) => (
          <div key={video.id} className="col-12 col-md-6 col-lg-4 mb-3">
            <VideoCard video={video} />
          </div>
        ))}
      </div>

      <div ref={loaderRef} className="text-center py-3 bg-white">
        {visibleVideos.length < videos.length ? (
          <span>{t('header.loading')}</span>
        ) : (
          <span>{t('header.end')}</span>
        )}
      </div>
    </div>
  )
}
