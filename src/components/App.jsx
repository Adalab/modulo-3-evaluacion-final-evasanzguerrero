import '../styles/App.scss';

import castleHarry from '../../src/images/castillo-harry.webp';
import harryLetter from '../../src/images/letras-doradas.png';

function App() {
  return (
    <div>
      <header>
        <img src={castleHarry} alt="Imagen castillo de Harry Potter" />
        <img src={harryLetter} alt="Imagen letras doradas de Harry Potter" />
      </header>
      <main>
        <form>
          <label htmlFor="search">Busca por personaje: </label>
          <input type="text" name="Search" id="Search" />
          <div>
            <label htmlFor="house">Selecciona una casa: </label>
            <select name="house" id="house">
              <option value="">🦉</option>
              <option value="gr">Gryffindor</option>
              <option value="sl">Slytherin</option>
              <option value="hu">Hufflepuff</option>
              <option value="ra">Ravenclaw</option>
            </select>
          </div>
        </form>
        <section>
          <h2>Lista de personajes</h2>
          <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </section>
      </main>
      <footer> 🧹 Adalab promo Betty 2024 🧹</footer>
    </div>
  )
}

export default App;
