import { FC, PropsWithChildren, ButtonHTMLAttributes } from 'react'

import { joinCssClasses } from 'shared/lib/css'

import { ButtonVariants, ButtonColors, colors } from './config'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariants
  color?: ButtonColors
}

const DEFAULT_VARIANT: ButtonVariants = 'contained'
const DEFAULT_COLOR: ButtonColors = 'primary'
const DEFAULT_CLASSES = [
  'px-1.5',
  'py-2',
  'rounded',
  'text-base',
  'font-medium',
]

export const Button: FC<PropsWithChildren<Props>> = ({
  children,
  variant = DEFAULT_VARIANT,
  color = DEFAULT_COLOR,
  className = '',
  ...rest
}) => {
  const props = {
    ...rest,
    className: joinCssClasses([
      ...DEFAULT_CLASSES,
      ...Object.values(colors[color][variant]),
      className,
    ]),
  }

  return <button {...props}>{children}</button>
}
