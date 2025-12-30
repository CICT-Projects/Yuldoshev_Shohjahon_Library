import { useEffect, useState } from 'react'

const API = 'http://localhost:5000/api/books'

export default function Books() {
  const [books, setBooks] = useState([])
  const [title, setTitle] = useState('')
  const [year, setYear] = useState('')

  const fetchBooks = async () => {
    const res = await fetch(API)
    const data = await res.json()
    setBooks(data)
  }

  useEffect(() => {
    fetchBooks()
  }, [])

  const handleAdd = async (e) => {
    e.preventDefault()
    const book = { title, year: parseInt(year, 10) }
    await fetch(API, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(book),
    })
    setTitle('')
    setYear('')
    fetchBooks()
  }

  const handleDelete = async (id) => {
    await fetch(`${API}/${id}`, { method: 'DELETE' })
    fetchBooks()
  }

  return (
    <div>
      <h2>Books</h2>
      <form onSubmit={handleAdd}>
        <input placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} required />
        <input placeholder="Year" value={year} onChange={(e) => setYear(e.target.value)} required type="number" />
        <button type="submit">Add</button>
      </form>

      <ul>
        {books.map(b => (
          <li key={b.id}>
            {b.title} ({b.year}) <button onClick={() => handleDelete(b.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  )
}
