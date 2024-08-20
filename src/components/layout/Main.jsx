import { useState } from "react";
import Filters from "../Filters";

function Main({characters}) {

  const [ searchName, setSearchName ] = useState( '' );
  const [ searchHouse, setSearchHouse ] = useState( '' );

  const filteredCharacters = characters
      .filter(characterObj => searchHouse === 'NS/NC' || characterObj.house.toLocaleLowerCase().startsWith(searchHouse.toLocaleLowerCase()))
      .filter(characterObj => characterObj.name.toLocaleLowerCase().includes(searchName.toLocaleLowerCase()));

  return (
    <main>
      <Filters 
        searchName={searchName}   
        setSearchName={setSearchName}
        setSearchHouse={setSearchHouse}
      />
      <section>
        <ul className="containerUl">
          {filteredCharacters.map((character) => (
            <li className="character_list" key={character.id}>
              <div className="character">
                <img
                  className="character_img"
                  src={
                    character.image ||
                    "https://www.lavanguardia.com/andro4all/hero/2024/02/harry-potter.1708702569.2268.jpg?width=768&aspect_ratio=16:9&format=nowebp"
                  }
                  alt={`Imagen de ${character.name}`}
                />
                <div className="character_info">
                  <h2 className="character">{character.name}</h2>
                  <p className="character">{character.species}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Main;