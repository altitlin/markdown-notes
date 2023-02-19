export const variants = {
  primary: {
    bg: 'bg-violet-500',
    color: 'text-slate-50',
  },
  info: {
    bg: 'bg-blue-500',
    color: 'text-slate-50',
  },
  error: {
    bg: 'bg-red-600',
    color: 'text-slate-50',
  },
  success: {
    bg: 'bg-green-600',
    color: 'text-slate-50',
  },
  warning: {
    bg: 'bg-orange-500',
    color: 'text-slate-50',
  },
}

export type BadgeVariants = keyof typeof variants
