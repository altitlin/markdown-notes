import { render, screen, waitFor } from '@testing-library/react'
import { createMemoryRouter, RouterProvider } from 'react-router-dom'

import { routes } from 'pages'

describe('Routing', () => {
	test('should correctly handle route "/"', async () => {
		const memoryRouter = createMemoryRouter(routes, { initialEntries: ['/'] })

		render(<RouterProvider router={memoryRouter} />)

		await waitFor(() => expect(screen.getByText('Root page')).toBeInTheDocument())
	})
})
