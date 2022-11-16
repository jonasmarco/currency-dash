import { format, subDays } from 'date-fns'
import { Line } from 'react-chartjs-2'
import { useFetch } from '../../hooks/useFetch'
import { Quote } from '../../types/Quote'
import PageTitle from '../PageTitle'

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js'
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

const today = format(new Date(), 'yyyyMMdd')
const tenDaysAgo = format(subDays(new Date(), 10), 'yyyyMMdd')
const options = {
  responsive: true
}
const labels = [
  'Preço',
  'Preço',
  'Preço',
  'Preço',
  'Preço',
  'Preço',
  'Preço',
  'Preço',
  'Preço',
  'Preço'
]

const TopCurrencies = () => {
  const { data: dataUSDBRL } = useFetch<Quote[]>(
    `https://economia.awesomeapi.com.br/USD-BRL/10?start_date=${tenDaysAgo}&end_date=${today}`
  )
  const { data: dataEURBRL } = useFetch<Quote[]>(
    `https://economia.awesomeapi.com.br/EUR-BRL/10?start_date=${tenDaysAgo}&end_date=${today}`
  )
  const { data: dataGBPBRLL } = useFetch<Quote[]>(
    `https://economia.awesomeapi.com.br/GBP-BRL/10?start_date=${tenDaysAgo}&end_date=${today}`
  )

  const dataChart = {
    labels,
    datasets: [
      {
        label: 'USD-BRL',
        data: dataUSDBRL?.map(({ ask }) => ask),
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)'
      },
      {
        label: 'EUR-BRL',
        data: dataEURBRL?.map(({ ask }) => ask),
        borderColor: 'rgb(235, 229, 53)',
        backgroundColor: 'rgba(217, 235, 53, 0.5)'
      },
      {
        label: 'GBP-BRL',
        data: dataGBPBRLL?.map(({ ask }) => ask),
        borderColor: 'rgb(235, 53, 71)',
        backgroundColor: 'rgba(235, 53, 53, 0.5)'
      }
    ]
  }

  return (
    <section className="lg:py-20 pb-20 px-10 lg:px-0 bg-white tails-selected-element">
      <div className="container max-w-6xl mx-auto">
        <PageTitle title="Principais moedas" />
        <Line options={options} data={dataChart} />
      </div>
    </section>
  )
}

export default TopCurrencies
