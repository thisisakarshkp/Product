import { Link, NavLink } from 'react-router-dom'

function Header() {
  return (
    <header className="border-b border-slate-200 bg-white">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <div className='flex'>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2mE8_-qhyxjqCEJhmyBnzD2Vcugn-8DfWeBR4y-Iw5XmuHAuUFF7W6THz&s=10" alt="" style={{width:'30px'}}/>
            <Link to="/" className="text-xl font-bold tracking-tight text-slate-900 ml-5">
              Product Catalog
            </Link>
        </div>

        <nav aria-label="Main navigation" className="flex items-center gap-2 sm:gap-6">
          <NavLink
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            to="/products"
          >
            Products
          </NavLink>
          <NavLink
            to="/add-product"
            className="rounded-md px-3 py-2 text-sm 
                bg-blue-800 text-white"
          >
            Add product
          </NavLink>
        </nav>
      </div>
    </header>
  )
}

export default Header