import { render, screen } from '@testing-library/react'
import PageTitle from '.'

describe('PageTitle', () => {
  it('should render correctly', () => {
    render(<PageTitle title="Stone" />)

    expect(screen.getByText(/stone/i)).toBeInTheDocument()
  })
})
