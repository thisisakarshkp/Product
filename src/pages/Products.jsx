import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { deleteProductAPI, getAllProductsAPI } from '../services/allAPI'
import { FaEdit } from "react-icons/fa";

function Products() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    getAllProductsAPI().then((response) => {
        setProducts(response.data)
    })
  }, [])

  const handleDelete = (product) => {
    if (window.confirm(`Delete ${product.name}?`)) {
      deleteProductAPI(product.id).then(() => {
        setProducts((currentProducts) =>
          currentProducts.filter((item) => item.id !== product.id)
        )
      })
    }
  }

  return (
    <main className="m-6">
      <h1 className="mb-4 text-xl font-bold">Products</h1>
      {products.length === 0 ? (
        <p>No products found.</p>
      ) : (
        <table className="w-full border-collapse">
          <thead className="text-left">
            <tr>
              <th className="border border-gray-300 p-2">Name</th>
              <th className="border border-gray-300 p-2">Price</th>
              <th className="border border-gray-300 p-2">Category</th>
              <th className="border border-gray-300 p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td className="border border-gray-300 p-2">{product.name}</td>
                <td className="border border-gray-300 p-2">{product.price}</td>
                <td className="border border-gray-300 p-2">{product.category}</td>
                <td className="border border-gray-300 p-2">
                  <div className="flex gap-2">
                    <Link
                      className="flex items-center gap-2 rounded-full bg-blue-700 px-4 py-2 text-white"
                      to={`/edit-product/${product.id}`}
                    >
                      <FaEdit />
                      Edit
                    </Link>
                    <button
                      className="rounded-full bg-red-500 px-4 py-2 text-white"
                      onClick={() => handleDelete(product)}
                      type="button"
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </main>
  )
}

export default Products
