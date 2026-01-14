import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '../../test-utils/render'
import userEvent from '@testing-library/user-event'
import { Button } from './Button'

describe('Button Component', () => {
    // 渲染测试
    describe('Rendering', () => {
        it('should render button with children', () => {
            render(<Button>Click me</Button>)
            expect(screen.getByRole('button')).toBeInTheDocument()
            expect(screen.getByText('Click me')).toBeInTheDocument()
        })

        it('should render with different variants', () => {
            const variants = ['filled', 'light', 'outline', 'transparent', 'white', 'subtle', 'default', 'gradient'] as const

            variants.forEach(variant => {
                const { unmount } = render(<Button variant={variant}>Test</Button>)
                const button = screen.getByRole('button')
                expect(button).toBeInTheDocument()
                unmount()
            })
        })

        it('should render with filled variant by default', () => {
            render(<Button>Default Button</Button>)
            const button = screen.getByRole('button')
            expect(button).toBeInTheDocument()
        })
    })

    describe('Disabled State', () => {
        it('should render disabled button', () => {
            render(<Button disabled>Disabled Button</Button>)
            const button = screen.getByRole('button')
            expect(button).toBeDisabled()
        })

        it('should not be disabled by default', () => {
            render(<Button>Enabled Button</Button>)
            const button = screen.getByRole('button')
            expect(button).not.toBeDisabled()
        })
    })

    describe('Children Content', () => {
        it('should render text children', () => {
            render(<Button>Text Content</Button>)
            expect(screen.getByText('Text Content')).toBeInTheDocument()
        })

        it('should render with complex children', () => {
            render(
                <Button>
                    <span>Icon</span>
                    <span>Text</span>
                </Button>
            )
            expect(screen.getByText('Icon')).toBeInTheDocument()
            expect(screen.getByText('Text')).toBeInTheDocument()
        })

        it('should render without children', () => {
            render(<Button />)
            const button = screen.getByRole('button')
            expect(button).toBeInTheDocument()
            expect(button).toBeEmptyDOMElement()
        })
    })

    describe('User Interactions', () => {
        it('should handle click events', async () => {
            const handleClick = vi.fn()
            render(<Button onClick={handleClick}>Click me</Button>)

            const button = screen.getByRole('button')
            await userEvent.click(button)

            expect(handleClick).toHaveBeenCalledTimes(1)
        })

        it('should not trigger click when disabled', async () => {
            const handleClick = vi.fn()
            render(
                <Button disabled onClick={handleClick}>
                    Disabled
                </Button>
            )

            const button = screen.getByRole('button')
            await userEvent.click(button)

            expect(handleClick).not.toHaveBeenCalled()
        })
    })

    describe('Variant Combinations', () => {
        it('should render filled variant correctly', () => {
            render(<Button variant="filled">Filled Button</Button>)
            expect(screen.getByText('Filled Button')).toBeInTheDocument()
        })

        it('should render outline variant correctly', () => {
            render(<Button variant="outline">Outline Button</Button>)
            expect(screen.getByText('Outline Button')).toBeInTheDocument()
        })

        it('should render light variant correctly', () => {
            render(<Button variant="light">Light Button</Button>)
            expect(screen.getByText('Light Button')).toBeInTheDocument()
        })

        it('should render gradient variant correctly', () => {
            render(<Button variant="gradient">Gradient Button</Button>)
            expect(screen.getByText('Gradient Button')).toBeInTheDocument()
        })
    })
})
