import { useState, useEffect } from 'react'
import films from './data/films'

function App() {
  const [currentFilms, setCurrentFilms] = useState(films);
  const [filteredFilms, setFilteredFilms] = useState(currentFilms);
  const [genreSelected, setGenreSelected] = useState('');

  const generi = ['Fantascienza', 'Thriller', 'Romantico', 'Azione'];

  useEffect(() => {
    if(!genreSelected) setFilteredFilms(currentFilms) //se non è selezionato nessun genere allora mostro tutti i film
      else{
        const filtered = currentFilms.filter((current) => current.genre === genreSelected);
        setFilteredFilms(filtered);
      }
  }, [genreSelected, currentFilms]);

  return (
    <>
      <div>
        <header>
          <div className='container'>
            <h1>React Movie Filter</h1>
          </div>
        </header>
        <main>
          <div className='container'>
            <select value={genreSelected} onChange={(e) => setGenreSelected(e.target.value)}>
              <option value="">Tutti i generi</option>
              {generi.map((g, index) => (
                <option key={index} value={g}>{g}</option>
              ))};
            </select>
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
