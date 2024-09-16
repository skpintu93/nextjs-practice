import Link from 'next/link'

export default function ImageCards() {
  const categories = [
    {
      title: "WEDDING GIFTS",
      image: "/placeholder.svg?height=200&width=200",
      link: "#"
    },
    {
      title: "HOTEL GIFTING",
      image: "/placeholder.svg?height=200&width=200",
      link: "#"
    },
    {
      title: "GIFTS FOR EVENTS",
      image: "/placeholder.svg?height=200&width=200",
      link: "#"
    },
    {
      title: "CORPORATE GIFTS",
      image: "/placeholder.svg?height=200&width=200",
      link: "#"
    },
    {
      title: "HOLIDAY GIFTS",
      image: "/placeholder.svg?height=200&width=200",
      link: "#"
    }
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl md:text-4xl font-semibold text-center mb-8 text-gray-700">WHAT WE DO</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {categories.map((category, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="rounded-lg overflow-hidden mb-4 shadow-md">
              <img
                src={category.image}
                alt={category.title}
                className="w-full h-48 object-cover"
              />
            </div>
            <h3 className="text-lg font-medium text-gray-700 mb-2">{category.title}</h3>
            <Link href={category.link} className="text-sm text-gray-500 hover:underline">
              View More
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}