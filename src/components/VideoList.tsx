import React, { useState, useEffect, useRef, useCallback, useContext, useMemo } from 'react'
import { VideoCard } from './VideoCard'
import { generateVideoData } from '@mocks'
import { useTranslation } from 'react-i18next'
import { SearchContext } from '@context'

export const VideoList: React.FC = () => {
  const { t } = useTranslation()
  const videos = useMemo(() => generateVideoData(t), [t])

  const searchContext = useContext(SearchContext)
  const searchTerm = searchContext ? searchContext.searchTerm : ''

  const filteredVideos = useMemo(() => {
    return searchTerm
      ? videos.filter((video) => video.title.toLowerCase().includes(searchTerm.toLowerCase()))
      : videos
  }, [searchTerm, videos])

  const [visibleVideos, setVisibleVideos] = useState(() => filteredVideos.slice(0, 6))
  const loaderRef = useRef<HTMLDivElement | null>(null)

  // Reset video list when filteredVideos changes
  useEffect(() => {
    setVisibleVideos(filteredVideos.slice(0, 6))
  }, [filteredVideos])

  const loadMore = useCallback(() => {
    setVisibleVideos((prev) => {
      const nextCount = prev.length + 6
      return filteredVideos.slice(0, nextCount)
    })
  }, [filteredVideos])

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
        {visibleVideos.length < filteredVideos.length ? (
          <span>{t('header.loading')}</span>
        ) : (
          <span>{t('header.end')}</span>
        )}
      </div>
    </div>
  )
}
