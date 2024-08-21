import { useState } from "react";
import Filters from "../Filters";
import CharactersList from "../CharacterList";

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
        <CharactersList filteredCharacters={filteredCharacters}/>
      </section>
    </main>
  );
}

export default Main;