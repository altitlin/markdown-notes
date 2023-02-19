import { FC } from 'react'

import { joinCssClasses } from 'shared/lib/css'

import { BadgeVariants, variants } from './config'

interface Props {
  label: string
  variant?: BadgeVariants
  className?: string
}

const DEFAULT_VARIANT: BadgeVariants = 'primary'
const DEFAULT_CLASSES = [
  'rounded-md',
  'text-xs',
  'font-medium',
  'text-center',
  'px-1.5',
  'py-0.5',
]

export const Badge: FC<Props> = ({
  label,
  variant = DEFAULT_VARIANT,
  className = '',
}) => {
  const classes = joinCssClasses([
    ...DEFAULT_CLASSES,
    ...Object.values(variants[variant]),
    className,
  ])

  return <span className={classes}>{label}</span>
}
