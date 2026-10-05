import { useNavigate } from 'react-router-dom'
import ProductForm from '../components/ProductForm'
import { addProductAPI } from '../services/allAPI'

function AddProducts() {
  const navigate = useNavigate()

  const handleAddProduct = (product) => {
    addProductAPI(product).then(() => navigate('/products'))
  }

  return (
    <main className="m-6 flex flex-col items-center">
      <h1 className="mb-4 text-xl font-bold">Add product</h1>
      <ProductForm onSave={handleAddProduct} />
    </main>
  )
}

export default AddProducts