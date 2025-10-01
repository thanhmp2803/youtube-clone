import type { TFunction } from 'i18next'

const VideoData = (t: TFunction<'translation', undefined>) => [
  {
    id: '1',
    title: t('videoCard.video.title'),
    thumbnail: '/images/conmeo.jpg',
    avatar: '/images/conmeo.jpg',
    channel: 'Channel One',
    views: '1M',
    time: t('videoCard.time.days', { count: 1 }),
  },
  {
    id: '2',
    title: t('videoCard.video.title'),
    thumbnail: '/images/conmeo.jpg',
    avatar: '/images/conmeo.jpg',
    channel: 'Channel One',
    views: '500k',
    time: t('videoCard.time.days', { count: 2 }),
  },
  {
    id: '3',
    title: t('videoCard.video.title'),
    thumbnail: '/images/conmeo.jpg',
    avatar: '/images/conmeo.jpg',
    channel: 'Channel One',
    views: '1M',
    time: t('videoCard.time.days', { count: 1 }),
  },
  {
    id: '4',
    title: t('videoCard.video.title'),
    thumbnail: '/images/conmeo.jpg',
    avatar: '/images/conmeo.jpg',
    channel: 'Channel One',
    views: '1M',
    time: t('videoCard.time.days', { count: 1 }),
  },
  {
    id: '5',
    title: t('videoCard.video.title'),
    thumbnail: '/images/conmeo.jpg',
    avatar: '/images/conmeo.jpg',
    channel: 'Channel One',
    views: '1M',
    time: t('videoCard.time.days', { count: 1 }),
  },
  {
    id: '6',
    title: t('videoCard.video.title'),
    thumbnail: '/images/conmeo.jpg',
    avatar: '/images/conmeo.jpg',
    channel: 'Channel One',
    views: '1M',
    time: t('videoCard.time.days', { count: 1 }),
  },
]
export { VideoData }
