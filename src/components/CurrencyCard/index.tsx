import { Link } from 'react-router-dom'
import { realConverter } from '../../helpers/realConverter'
import { Quote } from '../../types/Quote'

const CurrencyCard = ({ code, codein, name, ask }: Quote) => {
  return (
    <Link
      to={`/quote/${code}-${codein}`}
      className="flex flex-col items-center justify-between col-span-4 px-8 py-12 space-y-4 bg-gray-800 border-gray-700 rounded-xl"
      data-rounded="rounded-xl"
      data-rounded-max="rounded-full"
      data-testid="currency-card"
    >
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
        {name}
      </h5>
      <p className="font-normal text-gray-400 text-xl" data-testid="ask_value">
        {realConverter(parseFloat(ask))}
      </p>
      <button className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        Veja mais
        <svg
          aria-hidden="true"
          className="ml-2 -mr-1 w-4 h-4"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
            clipRule="evenodd"
          ></path>
        </svg>
      </button>
    </Link>
  )
}

export default CurrencyCard
