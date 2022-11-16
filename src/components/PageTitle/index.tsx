type PageTitleProps = {
  title: string
}

const PageTitle = ({ title }: PageTitleProps) => {
  return (
    <section className="h-auto bg-white tails-selected-element">
      <div className="max-w-7xl mx-auto py-16 md:px-10 sm:py-24 sm:px-6 lg:px-8 sm:text-center">
        <p className="mt-1 font-extrabold text-gray-900 sm:tracking-tight lg:text-5xl text-3xl">
          {title}
        </p>
      </div>
    </section>
  )
}

export default PageTitle
