import '../styles/App.scss';
import {useState} from "react";

import charactersJson from '../data/characters.json';

import harryLetter from '../../src/images/letras-doradas.png';



function App() {

  //VARIABLES DE ESTADO
  
  const [ characters, setCharacters ] = useState(charactersJson);
  const [ search, setSearch ] = useState( '' );
  const [ filterHouse, setfilterHouse ] = useState( 'NS/NC' );


  //FUNCIONES DE EVENTOS


  const handleFilterCharacters = (ev) => {
    setSearch(ev.currentTarget.value);
    
  };
  
  const handleChangeFilterHouse = (ev) => {
    const newValue = ev.currentTarget.value;
    setfilterHouse(newValue);
  };
  
  // DATOS DE RENDERIZADO

  const filteredCharacters = characters.filter(characterObj => characterObj.name.toLocaleLowerCase().includes(search.toLocaleLowerCase()))
  
  return (
    <div className="conta">
      <header className="container_title">
        <img className="title" src={harryLetter} alt="Imagen letras doradas de Harry Potter" />
      </header>
      <main>
        <form className="container_input">
          <section className="section">
            <label htmlFor="search">Busca por personaje: </label>
            <input className="input_section" value={search} onInput={handleFilterCharacters}  type="text" name="search" id="search" />
          </section>
          <div className="select_container">
            <label htmlFor="label_house">Selecciona una casa: </label>
            <select  className="select_house" value={filterHouse} onChange={handleChangeFilterHouse} name="house" id="house">
              <option value="NS/NC">Opciones</option>
              <option value="gr">Gryffindor</option>
              <option value="sl">Slytherin</option>
              <option value="hu">Hufflepuff</option>
              <option value="ra">Ravenclaw</option>
            </select>
          </div>
        </form>
        <section >
          <ul className="containerUl">
            {filteredCharacters.map(character => 
              <li className="character_list">
                <div className="character">
                    <img className="character_img"src={character.image || 'https://www.lavanguardia.com/andro4all/hero/2024/02/harry-potter.1708702569.2268.jpg?width=768&aspect_ratio=16:9&format=nowebp' } alt={`Imagen de ${character.name}`} />
                    <div className="character_info">
                      <h2 className="character">{character.name}</h2>
                      <p className="character">{character.species}</p>
                    </div>
                  </div>
              </li>
            )}
          </ul>
        </section>
      </main>
      <footer className="info_footer"> 
        🧹 Adalaber promo Betty 2024 🦉
      </footer>
    </div>
  )
}

export default App;
                  
                 
                  

                  
                
