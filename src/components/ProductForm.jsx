import { useState } from 'react'

const categories = [
  { category: 'Electronics' },
  { category: 'Accessories' },
  { category: 'Books' },
  { category: 'Clothing' },
  { category: 'Others' },
]

function ProductForm({ product, onSave, buttonText = 'Add product' }) {
  const [name, setName] = useState(product?.name || '')
  const [price, setPrice] = useState(product?.price || '')
  const [category, setCategory] = useState(product?.category || '')

  return (
    <div className="flex w-full max-w-lg flex-col gap-4 rounded-xl border border-gray-400 p-4">
      <label className="flex flex-col gap-1">
        Name
        <input
          className="rounded border border-gray-400 px-3 py-2"
          value={name}
          onChange={(event) => setName(event.target.value)}
          required
        />
      </label>

      <label className="flex flex-col gap-1">
        Price
        <input
          className="rounded border border-gray-400 px-3 py-2"
          type="number"
          min="0"
          step="any"
          value={price}
          onChange={(event) => setPrice(event.target.value)}
          required
        />
      </label>

      <label className="flex flex-col gap-1">
        Category
        <select
          className="rounded border border-gray-400 px-3 py-2"
          value={category}
          onChange={(event) => setCategory(event.target.value)}
          required
        >
          <option value="" disabled>Select a category</option>
          {categories.map((item) => (
            <option key={item.category} value={item.category}>
              {item.category}
            </option>
          ))}
        </select>
      </label>

      <button
        className="w-fit rounded-full bg-blue-700 px-4 py-2 text-white hover:bg-blue-800"
        type="button"
        onClick={() => onSave({ name, price: Number(price), category })}
      >
        {buttonText}
      </button>
    </div>
  )
}

export default ProductForm
