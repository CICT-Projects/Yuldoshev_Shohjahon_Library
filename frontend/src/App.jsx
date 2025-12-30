import { useState } from 'react'
import './App.css'
import Books from './components/Books'
import Authors from './components/Authors'

function App() {
  const [page, setPage] = useState('books')

  return (
    <div className="App">
      <header>
        <h1>Library</h1>
        <nav>
          <button onClick={() => setPage('books')}>Books</button>
          <button onClick={() => setPage('authors')}>Authors</button>
        </nav>
      </header>
      <main>
        {page === 'books' ? <Books /> : <Authors />}
      </main>
    </div>
  )
}

export default App
//100