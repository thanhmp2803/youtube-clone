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
  const menuItems = [
    { icon: <PiQueue />, label: t('video_card.menu.add_to_queue') },
    { icon: <MdOutlineWatchLater />, label: t('video_card.menu.save_to_watch_later') },
    { icon: <LuBookmark />, label: t('video_card.menu.save_to_playlist') },
    { icon: <PiShareFat />, label: t('video_card.menu.share') },
    { icon: <IoBanSharp />, label: t('video_card.menu.not_interested') },
    { icon: <MdOutlineDoNotDisturbOn />, label: t('video_card.menu.dont_recommend_channel') },
    { icon: <HiOutlineFlag />, label: t('video_card.menu.report') },
  ]

  return (
    <div className="card border-0">
      {/* Thumbnail */}
      <div className="ratio ratio-16x9">
        <img src={video.thumbnail} alt={video.title} className="card-img-top rounded" />
      </div>

      {/* Info */}
      <div className="card-body px-0 video-card">
        <div className="d-flex mt-2">
          <div className="avatar rounded-circle overflow-hidden me-2">
            <img className="avatar-image" src={video.avatar} alt="User avatar" />
          </div>
          <div className="flex-grow-1 pe-2 min-width-0">
            <h6 className="fw-bold video-title mb-1">{video.title}</h6>
            <p className="text-muted small mb-0">{video.channel}</p>
            <p className="text-muted small mb-0">
              {video.views} {t('video_card.video.views')} • {video.time}{' '}
              {t('video_card.video.time')}
            </p>
          </div>
          <div className="dropdown flex-shrink-0">
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
            <ul className="dropdown-menu dropdown-menu-end " aria-labelledby="dropdownMenuButton">
              {menuItems.map((item, index) => (
                <li key={index}>
                  <button className="dropdown-item d-flex align-items-center" type="button">
                    {item.icon} {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
