import '../styles/App.scss';

import castilloHarry from '../../src/images/castillo-harry.webp'

function App() {
  return (
    <div>
      <header>
        <img src={castilloHarry} alt="Imagen castillo de Harry Potter"></img>
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
        <section></section>
      </main>
      <footer> 🧹 Adalab promo Betty 2024 🧹</footer>
    </div>
  )
}

export default App;
