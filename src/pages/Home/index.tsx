import { useState } from 'react'
import Menu from '../../components/Menu'

import CurrencyList from '../../components/CurrencyList'
import TopCurrencies from '../../components/TopCurrencies'

const Home = () => {
  const [showChart, setShowChart] = useState(false)

  return (
    <>
      <Menu setShowChart={setShowChart} />
      {showChart ? <TopCurrencies /> : <CurrencyList />}
    </>
  )
}

export default Home
