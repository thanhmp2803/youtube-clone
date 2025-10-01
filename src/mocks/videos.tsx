import type { TFunction } from 'i18next'

const generateVideoData = (t: TFunction<'translation', undefined>) => [
  {
    id: '1',
    title: t('video_card.video.title'),
    thumbnail: '/images/conmeo.jpg',
    avatar: '/images/conmeo.jpg',
    channel: 'Channel One',
    views: '1M',
    time: t('video_card.time.days', { count: 1 }),
  },
  {
    id: '2',
    title: t('video_card.video.title'),
    thumbnail: '/images/conmeo.jpg',
    avatar: '/images/conmeo.jpg',
    channel: 'Channel One',
    views: '500k',
    time: t('video_card.time.days', { count: 2 }),
  },
  {
    id: '3',
    title: t('video_card.video.title'),
    thumbnail: '/images/conmeo.jpg',
    avatar: '/images/conmeo.jpg',
    channel: 'Channel One',
    views: '1M',
    time: t('video_card.time.days', { count: 1 }),
  },
  {
    id: '4',
    title: t('video_card.video.title'),
    thumbnail: '/images/conmeo.jpg',
    avatar: '/images/conmeo.jpg',
    channel: 'Channel One',
    views: '1M',
    time: t('video_card.time.days', { count: 1 }),
  },
  {
    id: '5',
    title: t('video_card.video.title'),
    thumbnail: '/images/conmeo.jpg',
    avatar: '/images/conmeo.jpg',
    channel: 'Channel One',
    views: '1M',
    time: t('video_card.time.days', { count: 1 }),
  },
  {
    id: '6',
    title: t('video_card.video.title'),
    thumbnail: '/images/conmeo.jpg',
    avatar: '/images/conmeo.jpg',
    channel: 'Channel One',
    views: '1M',
    time: t('video_card.time.days', { count: 1 }),
  },
]
export { generateVideoData }
