import { Link } from 'react-router-dom'

function Home() {
  return (
    <main
      className="flex min-h-[100vh] flex-col items-center justify-center gap-4 bg-cover bg-center p-10 text-center text-white"
      style={{
        backgroundImage:
          "url('https://i.pinimg.com/originals/cd/83/0a/cd830a3f8932790824e0348190076b46.gif')",
      }}
    >
      <h1 className="text-5xl font-bold drop-shadow-lg">Welcome to the Product Catalog</h1>
      <Link
        to="/products"
        className="mt-5 rounded-full bg-white px-5 py-3 text-black hover:bg-orange-500"
      >
        View all products
      </Link>
    </main>
  )
}

export default Home