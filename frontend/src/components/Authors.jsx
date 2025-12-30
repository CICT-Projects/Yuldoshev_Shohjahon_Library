import { useEffect, useState } from 'react'

const API = 'http://localhost:5000/api/authors'

export default function Authors() {
  const [items, setItems] = useState([])
  const [name, setName] = useState('')
  const [country, setCountry] = useState('')

  const fetchItems = async () => {
    const res = await fetch(API)
    const data = await res.json()
    setItems(data)
  }

  useEffect(() => {
    fetchItems()
  }, [])

  const handleAdd = async (e) => {
    e.preventDefault()
    const auth = { name, country }
    await fetch(API, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(auth),
    })
    setName('')
    setCountry('')
    fetchItems()
  }

  const handleDelete = async (id) => {
    await fetch(`${API}/${id}`, { method: 'DELETE' })
    fetchItems()
  }

  return (
    <div>
      <h2>Authors</h2>
      <form onSubmit={handleAdd}>
        <input placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
        <input placeholder="Country" value={country} onChange={(e) => setCountry(e.target.value)} required />
        <button type="submit">Add</button>
      </form>

      <ul>
        {items.map(a => (
          <li key={a.id}>
            {a.name} ({a.country}) <button onClick={() => handleDelete(a.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  )
}
