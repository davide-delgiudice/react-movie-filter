import { useState } from 'react'
import films from './data/films'

function App() {

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
            <ul>
              {films.map((film) => (
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
