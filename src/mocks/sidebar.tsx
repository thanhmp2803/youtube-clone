import type { TFunction } from 'i18next'
import {
  MdOutlineSubscriptions,
  MdHistory,
  MdPlaylistPlay,
  MdOutlineWatchLater,
} from 'react-icons/md'
import { GoTrophy } from 'react-icons/go'
import { HiOutlineQuestionMarkCircle, HiOutlineFlag } from 'react-icons/hi2'
import { IoMusicalNotesOutline, IoSettingsOutline } from 'react-icons/io5'
import { LiaGamepadSolid } from 'react-icons/lia'
import { PiNewspaperClippingLight } from 'react-icons/pi'
import { RiFeedbackLine } from 'react-icons/ri'
import { SiYoutubeshorts } from 'react-icons/si'
import { AiOutlineLike } from 'react-icons/ai'
import { LiaDownloadSolid } from 'react-icons/lia'
import { SlHome } from 'react-icons/sl'

const iconProps = { size: 22, className: 'me-3' }

const menu1 = (t: TFunction<'translation', undefined>) => [
  { id: 'home', title: t('sidebar.main.home'), icon: <SlHome {...iconProps} />, url: '#' },
  {
    id: 'shorts',
    title: t('sidebar.main.shorts'),
    icon: <SiYoutubeshorts {...iconProps} />,
    url: '#',
  },
  {
    id: 'subscriptions',
    title: t('sidebar.main.subscriptions'),
    icon: <MdOutlineSubscriptions {...iconProps} />,
    url: '#',
  },
]

const menu2 = (t: TFunction<'translation', undefined>) => [
  {
    id: 'history',
    title: t('sidebar.profile.history'),
    icon: <MdHistory {...iconProps} />,
    url: '#',
  },
  {
    id: 'playlist',
    title: t('sidebar.profile.playlist'),
    icon: <MdPlaylistPlay {...iconProps} />,
    url: '#',
  },
  {
    id: 'watchLater',
    title: t('sidebar.profile.watchLater'),
    icon: <MdOutlineWatchLater {...iconProps} />,
    url: '#',
  },
  {
    id: 'liked',
    title: t('sidebar.profile.liked'),
    icon: <AiOutlineLike {...iconProps} />,
    url: '#',
  },
  {
    id: 'downloads',
    title: t('sidebar.profile.downloads'),
    icon: <LiaDownloadSolid {...iconProps} />,
    url: '#',
  },
]

const menu3 = (t: TFunction<'translation', undefined>) => [
  {
    id: 'music',
    title: t('sidebar.explore.music'),
    icon: <IoMusicalNotesOutline {...iconProps} />,
    url: '#',
  },
  {
    id: 'gaming',
    title: t('sidebar.explore.gaming'),
    icon: <LiaGamepadSolid {...iconProps} />,
    url: '#',
  },
  {
    id: 'news',
    title: t('sidebar.explore.news'),
    icon: <PiNewspaperClippingLight {...iconProps} />,
    url: '#',
  },
  { id: 'sports', title: t('sidebar.explore.sports'), icon: <GoTrophy {...iconProps} />, url: '#' },
]

const menu4 = (t: TFunction<'translation', undefined>) => [
  {
    id: 'settings',
    title: t('sidebar.settings.settings'),
    icon: <IoSettingsOutline {...iconProps} />,
    url: '#',
  },
  {
    id: 'report-history',
    title: t('sidebar.settings.reportHistory'),
    icon: <HiOutlineFlag {...iconProps} />,
    url: '#',
  },
  {
    id: 'help',
    title: t('sidebar.settings.help'),
    icon: <HiOutlineQuestionMarkCircle {...iconProps} />,
    url: '#',
  },
  {
    id: 'send-feedback',
    title: t('sidebar.settings.sendFeedback'),
    icon: <RiFeedbackLine {...iconProps} />,
    url: '#',
  },
]

const sidebarData = (t: TFunction<'translation', undefined>) => [
  { items: menu1(t), separator: true },
  { items: menu2(t), title: t('sidebar.profile.you'), separator: true },
  { items: menu3(t), title: t('sidebar.explore.explore'), separator: true },
  { items: menu4(t), separator: true },
]

export { sidebarData }
