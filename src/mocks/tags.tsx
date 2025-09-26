import type { TFunction } from 'i18next'
import type { ITag } from '../types/tag'

const TagData = (t: TFunction<'translation', undefined>): ITag[] => [
  { id: 'all', label: t('tags.all'), url: '#' },
  { id: 'music', label: t('tags.music'), url: '#' },
  { id: 'gaming', label: t('tags.gaming'), url: '#' },
  { id: 'news', label: t('tags.news'), url: '#' },
  { id: 'sports', label: t('tags.sports'), url: '#' },
  { id: 'live', label: t('tags.live'), url: '#' },
  { id: 'learning', label: t('tags.learning'), url: '#' },
  { id: 'fashion', label: t('tags.fashion'), url: '#' },
  { id: 'comedy', label: t('tags.comedy'), url: '#' },
  { id: 'movies', label: t('tags.movies'), url: '#' },
  { id: 'cooking', label: t('tags.cooking'), url: '#' },
  { id: 'travel', label: t('tags.travel'), url: '#' },
]
export { TagData }
