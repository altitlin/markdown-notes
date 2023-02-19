import { ReactNode } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'

import { MILLISECONDS_PER_MINUTE } from 'shared/constants'

const MINUTES_STALE_TIME = 5
const MINUTES_CACHE_TIME = 10

const staleTime = MINUTES_STALE_TIME * MILLISECONDS_PER_MINUTE
const cacheTime = MINUTES_CACHE_TIME * MILLISECONDS_PER_MINUTE

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
      retry: 1,
      staleTime,
      cacheTime,
    },
  },
})

export const withReactQuery = (component: () => ReactNode) => () =>
  (
    <QueryClientProvider client={queryClient}>
      {component()}
      <ReactQueryDevtools />
    </QueryClientProvider>
  )
