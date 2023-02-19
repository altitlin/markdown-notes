import { FC } from 'react'
import { NavLink } from 'react-router-dom'

import { Badge } from 'shared/ui'

type Props = {
  id: string
  title: string
  badges: string[]
}

export const NoteCard: FC<Props> = ({ id, title, badges }) => (
  <div className='flex flex-col justify-center items-center basis-1/5 h-24 rounded-lg border border-gray-300 border-solid shadow-md shadow-gray-300 hover:shadow-none hover:cursor-pointer'>
    <NavLink
      to={`/${id}`}
      className='font-sans text-xl font-normal tracking-wide text-gray-800 mb-3'
    >
      {title}
    </NavLink>
    <div className='flex gap-x-2'>
      {badges.map((badgeLabel) => (
        <Badge label={badgeLabel} />
      ))}
    </div>
  </div>
)
