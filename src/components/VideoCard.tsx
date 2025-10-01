import React from 'react'
import '@assets/styles/video.css'
import { BsThreeDotsVertical } from 'react-icons/bs'
import { PiQueue } from 'react-icons/pi'
import { MdOutlineWatchLater, MdOutlineDoNotDisturbOn } from 'react-icons/md'
import { LuBookmark } from 'react-icons/lu'
import { PiShareFat } from 'react-icons/pi'
import { IoBanSharp } from 'react-icons/io5'
import { HiOutlineFlag } from 'react-icons/hi2'
import { useTranslation } from 'react-i18next'

interface IVideo {
  id: string
  title: string
  thumbnail: string
  avatar: string
  channel: string
  views: string
  time: string
}

export const VideoCard: React.FC<{ video: IVideo }> = ({ video }) => {
  const { t } = useTranslation()
  return (
    <div className="card border-0">
      {/* Thumbnail */}
      <div className="ratio ratio-16x9">
        <img src={video.thumbnail} alt={video.title} className="card-img-top rounded" />
      </div>

      {/* Info */}
      <div className="card-body px-0 video-card">
        <div className="d-flex mt-2">
          <button className="rounded-circle overflow-hidden p-0 m-0 me-2 avatar">
            <img className="avatar-image" src={video.avatar} alt="User avatar" />
          </button>
          <div className="flex-grow-1">
            <div className="d-flex align-items-start">
              <h5 className="fw-bold text-truncate">{video.title} </h5>
              <div className="dropdown ms-auto">
                <button
                  className="btn btn-sm rounded-circle pt-0"
                  type="button"
                  id="dropdownMenuButton"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <BsThreeDotsVertical />
                </button>
                {/* Menu action on button */}
                <ul
                  className="dropdown-menu dropdown-menu-end "
                  aria-labelledby="dropdownMenuButton"
                >
                  <li>
                    {' '}
                    <button className="dropdown-item">
                      {' '}
                      <PiQueue /> {t('videoCard.menu.addToQueue')}{' '}
                    </button>
                  </li>
                  <li>
                    <button className="dropdown-item">
                      {' '}
                      <MdOutlineWatchLater /> {t('videoCard.menu.saveToWatchLater')}
                    </button>
                  </li>
                  <li>
                    <button className="dropdown-item">
                      {' '}
                      <LuBookmark /> {t('videoCard.menu.saveToPlaylist')}
                    </button>
                  </li>
                  <li>
                    <button className="dropdown-item">
                      {' '}
                      <PiShareFat /> {t('videoCard.menu.share')}
                    </button>
                  </li>
                  <li>
                    <button className="dropdown-item">
                      {' '}
                      <IoBanSharp /> {t('videoCard.menu.notInterested')}
                    </button>
                  </li>
                  <li>
                    <button className="dropdown-item">
                      {' '}
                      <MdOutlineDoNotDisturbOn /> {t('videoCard.menu.dontRecommendChannel')}
                    </button>
                  </li>
                  <li>
                    <button className="dropdown-item">
                      {' '}
                      <HiOutlineFlag /> {t('videoCard.menu.report')}
                    </button>
                  </li>
                </ul>
              </div>
            </div>
            <p className="text-muted small mb-0">{video.channel} </p>
            <p className="text-muted small">
              {' '}
              {video.views} {t('videoCard.video.views')} • {video.time} {t('videoCard.video.time')}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
