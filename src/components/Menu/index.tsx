type MenuProps = {
  setShowChart: (value: boolean) => void
}

const Menu = ({ setShowChart }: MenuProps) => {
  return (
    <nav className="border-gray-200 px-2 sm:px-4 py-2.5 bg-gray-900">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <div className="justify-between items-center w-full flex md:w-auto md:order-1">
          <ul className="flex p-4 flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium bg-gray-900">
            <li>
              <span
                className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 cursor-pointer"
                data-testid="show-home"
                onClick={() => setShowChart(false)}
              >
                Moedas
              </span>
            </li>
            <li>
              <span
                className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 cursor-pointer"
                data-testid="show-chart"
                onClick={() => setShowChart(true)}
              >
                Gráfico principais moedas
              </span>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Menu
