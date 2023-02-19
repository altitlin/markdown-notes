export const colors = {
  primary: {
    outlined: {
      border: 'border border-violet-500 border-solid',
      bg: 'bg-white',
      color: 'text-violet-500',
    },
    contained: {
      bg: 'bg-violet-500',
      color: 'text-slate-50',
    },
  },
  info: {
    outlined: {
      border: 'border border-blue-500 border-solid',
      bg: 'bg-white',
      color: 'text-blue-500',
    },
    contained: {
      bg: 'bg-blue-500',
      color: 'text-slate-50',
    },
  },
  error: {
    outlined: {
      border: 'border border-red-600 border-solid',
      bg: 'bg-white',
      color: 'text-red-600',
    },
    contained: {
      bg: 'bg-red-600',
      color: 'text-slate-50',
    },
  },
  success: {
    outlined: {
      border: 'border border-green-600 border-solid',
      bg: 'bg-white',
      color: 'text-green-600',
    },
    contained: {
      bg: 'bg-green-600',
      color: 'text-slate-50',
    },
  },
  warning: {
    outlined: {
      border: 'border border-orange-500 border-solid',
      bg: 'bg-white',
      color: 'text-orange-500',
    },
    contained: {
      bg: 'bg-orange-500',
      color: 'text-slate-50',
    },
  },
}

export type ButtonVariants = 'contained' | 'outlined'
export type ButtonColors = keyof typeof colors
