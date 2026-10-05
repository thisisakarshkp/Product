import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import ProductForm from '../components/ProductForm'
import { editProductAPI, getSingleProductAPI } from '../services/allAPI'

function EditProducts() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [product, setProduct] = useState(null)

  useEffect(() => {
    getSingleProductAPI(id).then((response) => {
      setProduct(response.data)
    })
  }, [id])

  const handleUpdateProduct = (updatedProduct) => {
    editProductAPI(id, updatedProduct).then(() => navigate('/products'))
  }

  return (
    <main className="m-6 flex flex-col items-center">
      <h1 className="mb-4 text-xl font-bold">Edit product</h1>
      {product && (
        <ProductForm
          key={product.id}
          product={product}
          onSave={handleUpdateProduct}
          buttonText="Update product"
        />
      )}
    </main>
  )
}

export default EditProducts