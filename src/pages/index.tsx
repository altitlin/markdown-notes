import { lazy } from 'react'
import { RouteObject } from 'react-router-dom'

const RootPage = lazy(() => import('pages/root-page'))

export const routes: RouteObject[] = [
	{
		path: '/',
		element: <RootPage />,
	},
]
