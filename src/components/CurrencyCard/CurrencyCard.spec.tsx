import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { BrowserRouter } from 'react-router-dom'
import CurrencyCard from '.'

const props = {
  code: 'USD',
  codein: 'BRL',
  name: 'Dólar Americano/Real Brasileiro',
  ask: '5,33',
  timestamp: new Date().valueOf().toString()
}

describe('CurrencyCard component tests', () => {
  it('should render correctly', () => {
    render(<CurrencyCard {...props} />, { wrapper: BrowserRouter })

    expect(
      screen.getByRole('heading', {
        name: /dólar americano\/real brasileiro/i
      })
    ).toBeInTheDocument()

    expect(screen.getByTestId('ask_value')).toHaveTextContent(/r\$ 5,00/i)

    expect(
      screen.getByRole('button', { name: /veja mais/i })
    ).toBeInTheDocument()
  })

  it('should redirect correctly', () => {
    render(<CurrencyCard {...props} />, { wrapper: BrowserRouter })

    const link = screen.getByTestId('currency-card')

    userEvent.click(link)

    expect(global.window.location.pathname).toEqual('/quote/USD-BRL')
  })
})
