import { Link, useParams } from 'react-router-dom'
import { format, subDays } from 'date-fns'
import PageTitle from '../../components/PageTitle'
import { Quote } from '../../types/Quote'
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
import { Line } from 'react-chartjs-2'
import { useFetch } from '../../hooks/useFetch'
import Error from '../../components/Error'
import Loader from '../../components/Loader'
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

const Historic = () => {
  const { name } = useParams()
  const today = format(new Date(), 'yyyyMMdd')
  const tenDaysAgo = format(subDays(new Date(), 10), 'yyyyMMdd')

  const { data, error } = useFetch<Quote[]>(
    `https://economia.awesomeapi.com.br/${name}/10?start_date=${tenDaysAgo}&end_date=${today}`
  )

  if (error) return <Error />
  if (!data) return <Loader />
  const dataChart = {
    labels: data.map(({ ask }) => ask),
    datasets: [
      {
        label: name,
        data: data.map(({ ask }) => ask),
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)'
      }
    ]
  }
  return (
    <>
      <PageTitle title={`Últimas 10 cotações de ${name}`} />
      <section className="lg:py-20 pb-20 px-10 lg:px-0 bg-white tails-selected-element">
        <div className="container max-w-6xl mx-auto">
          <Line data={dataChart} />
          <Link
            to="/"
            className="mt-10 inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            <svg
              className="w-6 h-6 mr-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M7 16l-4-4m0 0l4-4m-4 4h18"
              ></path>
            </svg>
            Voltar para a listagem
          </Link>
        </div>
      </section>
    </>
  )
}

export default Historic
