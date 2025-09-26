import React from 'react'
import type { ITag } from '@types'
import { useTranslation } from 'react-i18next'

interface ITagProps {
  tag: ITag
  isActive: boolean
  onClick: (id: string) => void
}

export const Tag: React.FC<ITagProps> = ({ tag, isActive = false, onClick }) => {
  const { t } = useTranslation()
  return (
    <li className="nav-item me-2">
      <a
        href={tag.url}
        className={`nav-link px-3 py-1 mt-2 rounded ${isActive ? 'bg-dark text-white' : 'bg-secondary bg-opacity-25 text-dark'}`}
        onClick={(e) => {
          e.preventDefault()
          onClick?.(tag.id)
        }}
      >
        {t(tag.label)}
      </a>
    </li>
  )
}
