import { useState } from "react";
import Filters from "../Filters";
import CharacterList from "../CharacterList";

function Home({characters}) {

  const [ searchName, setSearchName ] = useState( '' );
  const [ searchHouse, setSearchHouse ] = useState( '' );

  const filteredCharacters = characters
      .filter(characterObj => searchHouse === 'NS/NC' || characterObj.house.toLocaleLowerCase().startsWith(searchHouse.toLocaleLowerCase()))
      .filter(characterObj => characterObj.name.toLocaleLowerCase().includes(searchName.toLocaleLowerCase()));

  return (
    <>
      <Filters 
        searchName={searchName}   
        setSearchName={setSearchName}
        setSearchHouse={setSearchHouse}
      />
      <section>
        <CharacterList filteredCharacters={filteredCharacters}/>
      </section>
    </>
  );
}

export default Home;