import type { TFunction } from 'i18next'
import { FaRegFlag } from 'react-icons/fa'
import { GoTrophy } from 'react-icons/go'
import { HiOutlineQuestionMarkCircle } from 'react-icons/hi2'
import { IoMusicalNotesOutline, IoSettingsOutline } from 'react-icons/io5'
import { LiaGamepadSolid } from 'react-icons/lia'
import {
  MdOutlineSubscriptions,
  MdHistory,
  MdPlaylistPlay,
  MdOutlineWatchLater,
} from 'react-icons/md'
import { PiNewspaperClippingLight } from 'react-icons/pi'
import { RiFeedbackLine } from 'react-icons/ri'
import { SiYoutubeshorts } from 'react-icons/si'
import { SlHome } from 'react-icons/sl'

const iconProps = { size: 22, className: 'me-3' }

const menu1 = (t: TFunction<'translation', undefined>) => [
  { id: 'home', title: t('home'), icon: <SlHome {...iconProps} />, url: '#' },
  { id: 'shorts', title: t('shorts'), icon: <SiYoutubeshorts {...iconProps} />, url: '#' },
  {
    id: 'subscriptions',
    title: t('subscriptions'),
    icon: <MdOutlineSubscriptions {...iconProps} />,
    url: '#',
  },
]

const menu2 = (t: TFunction<'translation', undefined>) => [
  { id: 'history', title: t('history'), icon: <MdHistory {...iconProps} />, url: '#' },
  { id: 'playlist', title: t('playlist'), icon: <MdPlaylistPlay {...iconProps} />, url: '#' },
  {
    id: 'watchLater',
    title: t('watchLater'),
    icon: <MdOutlineWatchLater {...iconProps} />,
    url: '#',
  },
]

const menu3 = (t: TFunction<'translation', undefined>) => [
  { id: 'music', title: t('music'), icon: <IoMusicalNotesOutline {...iconProps} />, url: '#' },
  { id: 'gaming', title: t('gaming'), icon: <LiaGamepadSolid {...iconProps} />, url: '#' },
  { id: 'news', title: t('news'), icon: <PiNewspaperClippingLight {...iconProps} />, url: '#' },
  { id: 'sports', title: t('sports'), icon: <GoTrophy {...iconProps} />, url: '#' },
]

const menu4 = (t: TFunction<'translation', undefined>) => [
  { id: 'settings', title: t('settings'), icon: <IoSettingsOutline {...iconProps} />, url: '#' },
  { id: 'report-history', title: t('reportHistory'), icon: <FaRegFlag {...iconProps} />, url: '#' },
  { id: 'help', title: t('help'), icon: <HiOutlineQuestionMarkCircle {...iconProps} />, url: '#' },
  {
    id: 'send-feedback',
    title: t('sendFeedback'),
    icon: <RiFeedbackLine {...iconProps} />,
    url: '#',
  },
]

const sidebarData = (t: TFunction<'translation', undefined>) => [
  { items: menu1(t), separator: true },
  { items: menu2(t), title: t('you'), separator: true },
  { items: menu3(t), title: t('explore'), separator: true },
  { items: menu4(t), separator: false },
]

export { sidebarData }
