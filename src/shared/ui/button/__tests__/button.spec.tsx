import { ComponentProps } from 'react'
import { render, screen } from '@testing-library/react'

import { Button } from 'shared/ui'

type ButtonProps = ComponentProps<typeof Button>

jest.mock('shared/lib/css', () => ({
  ...jest.requireActual('shared/lib/css'),
  joinCssClasses: jest
    .fn()
    .mockImplementation((classes) => classes.join(' ').trim()),
}))

describe('Button', () => {
  test('should render with default variant and color button', () => {
    const props: ButtonProps = {
      children: 'Button 42',
    }

    render(<Button {...props} />)

    const button = screen.getByRole('button')
    expect(button.className.includes('bg-violet-500')).toBeTruthy()
    expect(button.className.includes('bg-white')).toBeFalsy()
  })

  test('should render a contained info button', () => {
    const props: ButtonProps = {
      children: 'Button 42',
      variant: 'contained',
      color: 'info',
    }

    render(<Button {...props} />)

    const button = screen.getByRole('button')
    expect(button.className.includes('bg-blue-500')).toBeTruthy()
    expect(button.className.includes('bg-white')).toBeFalsy()
  })

  test('should render a contained error button', () => {
    const props: ButtonProps = {
      children: 'Button 42',
      variant: 'contained',
      color: 'error',
    }

    render(<Button {...props} />)

    const button = screen.getByRole('button')
    expect(button.className.includes('bg-red-600')).toBeTruthy()
    expect(button.className.includes('bg-white')).toBeFalsy()
  })

  test('should render a contained success button', () => {
    const props: ButtonProps = {
      children: 'Button 42',
      variant: 'contained',
      color: 'success',
    }

    render(<Button {...props} />)

    const button = screen.getByRole('button')
    expect(button.className.includes('bg-green-600')).toBeTruthy()
    expect(button.className.includes('bg-white')).toBeFalsy()
  })

  test('should render a contained warning button', () => {
    const props: ButtonProps = {
      children: 'Button 42',
      variant: 'contained',
      color: 'warning',
    }

    render(<Button {...props} />)

    const button = screen.getByRole('button')
    expect(button.className.includes('bg-orange-500')).toBeTruthy()
    expect(button.className.includes('bg-white')).toBeFalsy()
  })

  test('should render an outlined info button', () => {
    const props: ButtonProps = {
      children: 'Button 42',
      variant: 'outlined',
      color: 'info',
    }

    render(<Button {...props} />)

    const button = screen.getByRole('button')
    expect(button.className.includes('bg-blue-500')).toBeFalsy()
    expect(button.className.includes('bg-white')).toBeTruthy()
  })

  test('should render an outlined error button', () => {
    const props: ButtonProps = {
      children: 'Button 42',
      variant: 'outlined',
      color: 'error',
    }

    render(<Button {...props} />)

    const button = screen.getByRole('button')
    expect(button.className.includes('bg-red-600')).toBeFalsy()
    expect(button.className.includes('bg-white')).toBeTruthy()
  })

  test('should render an outlined success button', () => {
    const props: ButtonProps = {
      children: 'Button 42',
      variant: 'outlined',
      color: 'success',
    }

    render(<Button {...props} />)

    const button = screen.getByRole('button')
    expect(button.className.includes('bg-green-600')).toBeFalsy()
    expect(button.className.includes('bg-white')).toBeTruthy()
  })

  test('should render an outlined warning button', () => {
    const props: ButtonProps = {
      children: 'Button 42',
      variant: 'outlined',
      color: 'warning',
    }

    render(<Button {...props} />)

    const button = screen.getByRole('button')
    expect(button.className.includes('bg-orange-500')).toBeFalsy()
    expect(button.className.includes('bg-white')).toBeTruthy()
  })

  test('should add a custom className', () => {
    const props: ButtonProps = {
      children: 'Button 42',
      className: 'className',
    }

    render(<Button {...props} />)

    const button = screen.getByRole('button')
    expect(button.className.includes('className')).toBeTruthy()
  })
})
