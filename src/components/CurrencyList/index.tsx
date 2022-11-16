import { useFetch } from '../../hooks/useFetch'
import { Quote } from '../../types/Quote'
import CurrencyCard from '../CurrencyCard'
import Error from '../Error'
import Loader from '../Loader'
import PageTitle from '../PageTitle'

const CurrencyList = () => {
  const { data, error } = useFetch<Quote[]>(
    'https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,GBP-BRL,PYG-BRL,ARS-BRL,BTC-BRL,LTC-BRL,ETH-BRL,DOGE-BRL'
  )
  const currencyListData = Object.values(data ?? [])

  if (error) return <Error />
  if (!data) return <Loader />

  return (
    <section className="lg:py-20 pb-20 px-10 lg:px-0 bg-white tails-selected-element">
      <div className="container max-w-6xl mx-auto">
        <PageTitle title="Acompanhe as últimas cotações do mercado" />
        <div className="grid grid-cols-4 gap-8 sm:grid-cols-8 lg:grid-cols-12 sm:px-8 xl:px-0">
          {currencyListData.map((props: Quote) => (
            <CurrencyCard key={props.name} {...props} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default CurrencyList
