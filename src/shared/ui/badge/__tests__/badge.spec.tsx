import { ComponentProps } from 'react'
import { render, screen } from '@testing-library/react'

import { Badge } from 'shared/ui'

type BadgeProps = ComponentProps<typeof Badge>

jest.mock('shared/lib/css', () => ({
  ...jest.requireActual('shared/lib/css'),
  joinCssClasses: jest
    .fn()
    .mockImplementation((classes) => classes.join(' ').trim()),
}))

describe('Badge', () => {
  test('should render with default color span', () => {
    const props: BadgeProps = {
      label: 'label',
    }

    render(<Badge {...props} />)

    const span = screen.getByText(props.label)
    expect(span.className.includes('bg-violet-500')).toBeTruthy()
  })

  test('should render an info span when variant="info"', () => {
    const props: BadgeProps = {
      label: 'label',
      variant: 'info',
    }

    render(<Badge {...props} />)

    const span = screen.getByText(props.label)
    expect(span.className.includes('bg-blue-500')).toBeTruthy()
  })

  test('should render an error span when variant="error"', () => {
    const props: BadgeProps = {
      label: 'label',
      variant: 'error',
    }

    render(<Badge {...props} />)

    const span = screen.getByText(props.label)
    expect(span.className.includes('bg-red-600')).toBeTruthy()
  })

  test('should render a success span when variant="success"', () => {
    const props: BadgeProps = {
      label: 'label',
      variant: 'success',
    }

    render(<Badge {...props} />)

    const span = screen.getByText(props.label)
    expect(span.className.includes('bg-green-600')).toBeTruthy()
  })

  test('should render a warning span when variant="warning"', () => {
    const props: BadgeProps = {
      label: 'label',
      variant: 'warning',
    }

    render(<Badge {...props} />)

    const span = screen.getByText(props.label)
    expect(span.className.includes('bg-orange-500')).toBeTruthy()
  })

  test('should add a custom className when className passed', () => {
    const props: BadgeProps = {
      label: 'label',
      className: 'className',
    }

    render(<Badge {...props} />)

    const span = screen.getByText(props.label)
    expect(span.className.includes('className')).toBeTruthy()
  })
})
