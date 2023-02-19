import { Suspense } from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import { routes } from 'pages'

const router = createBrowserRouter(routes)

export const withRouter = () => () =>
  (
    <RouterProvider
      fallbackElement={<Suspense fallback={<div>Loading...</div>} />}
      router={router}
    />
  )
