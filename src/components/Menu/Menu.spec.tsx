import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Menu from '.'

const mockSetShowChart = jest.fn()

describe('Menu component tests', () => {
  it('should render correctly', () => {
    render(<Menu setShowChart={mockSetShowChart} />)

    expect(screen.getByText(/^moedas/i)).toBeInTheDocument()
    expect(screen.getByText(/gráfico principais moedas/i)).toBeInTheDocument()
  })

  it('should call the functions correctly', () => {
    render(<Menu setShowChart={mockSetShowChart} />)

    const showHome = screen.getByTestId('show-home')
    userEvent.click(showHome)
    expect(mockSetShowChart).toHaveBeenCalledTimes(1)

    const showChart = screen.getByTestId('show-chart')
    userEvent.click(showChart)
    expect(mockSetShowChart).toHaveBeenCalledTimes(2)
  })
})
