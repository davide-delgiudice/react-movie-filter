import { useState, useEffect } from 'react'
import films from './data/films'

function App() {
  const [currentFilms, setCurrentFilms] = useState(films);
  const [filteredFilms, setFilteredFilms] = useState(currentFilms);
  const [genreSelected, setGenreSelected] = useState('');

  const generi = ['Fantascienza', 'Thriller', 'Romantico', 'Azione'];



  return (
    <>
      <div>
        <header>
          <div className='container'>
            <h1>React Movie Filter</h1>
          </div>
        </header>
        <main>
          <select value={genreSelected} onChange={(e) => setGenreSelected(e.target.value)}>
            <option value="">Tutti i generi</option>
            {generi.map((g, index) => (
              <option key={index} value={g}>{g}</option>
            ))};
          </select>
          <div className='container'>
            <ul>
              {filteredFilms.map((film) => (
                <li>
                  {film.title}
                </li>
              ))}
            </ul>
          </div>
        </main>
      </div>
    </>
  )
}

export default App
