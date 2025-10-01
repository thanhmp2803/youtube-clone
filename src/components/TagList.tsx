import React, { useState, useRef, useEffect } from 'react'
import { Tag } from './Tag'
import type { ITag } from '@types'
import { generateTagData } from '@mocks'
import { useTranslation } from 'react-i18next'
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa6'
import '@assets/styles/tag.css'

export const TagList: React.FC = () => {
  const { t } = useTranslation()
  const tags: ITag[] = generateTagData(t)

  const [activeTagId, setActiveTagId] = useState<string>(tags[0]?.id || '')
  const [showLeft, setShowLeft] = useState(false)
  const listRef = useRef<HTMLUListElement>(null)

  const handleScroll = () => {
    if (listRef.current) {
      setShowLeft(listRef.current.scrollLeft > 0)
    }
  }
  const scrollRight = () => {
    if (listRef.current) {
      listRef.current.scrollBy({ left: 300, behavior: 'smooth' })
    }
  }
  const scrollLeft = () => {
    if (listRef.current) {
      listRef.current.scrollBy({ left: -300, behavior: 'smooth' })
    }
  }

  useEffect(() => {
    const el = listRef.current
    if (!el) return
    const handleScroll = () => {
      setShowLeft(el.scrollLeft > 0)
    }

    el.addEventListener('scroll', handleScroll)
    return () => el.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="position-sticky py-1 taglist-container">
      {/* Left scroll button */}
      {showLeft && (
        <button
          type="button"
          className="btn btn-light position-absolute top-50 mt-1 translate-middle-y rounded-circle tag-scroll-btn "
          onClick={scrollLeft}
        >
          <FaChevronLeft />
        </button>
      )}
      <ul
        ref={listRef}
        onScroll={handleScroll}
        className="nav d-flex flex-nowrap overflow-x-auto ms-3 mb-2 hide-scrollbar"
      >
        {tags.map((tag) => (
          <Tag
            key={tag.id}
            tag={tag}
            isActive={activeTagId === tag.id}
            onClick={() => setActiveTagId(tag.id)}
          />
        ))}
      </ul>
      {/* Right scroll button */}
      <button
        type="button"
        className="btn btn-light position-absolute top-50 end-0 mt-1 translate-middle-y rounded-circle tag-scroll-btn"
        onClick={scrollRight}
      >
        <FaChevronRight />
      </button>
    </div>
  )
}
