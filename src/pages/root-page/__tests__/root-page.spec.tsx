import { render, screen } from '@testing-library/react'

import RootPage from 'pages/root-page'

describe('RootPage', () => {
	test('should correctly render', () => {
		render(<RootPage />)

		expect(screen.getByText('Root page')).toBeInTheDocument()
	})
})
