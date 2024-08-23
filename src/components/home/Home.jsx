import { useState } from "react";
import Filters from "../filter/Filters";
import CharacterList from "../character/CharacterList";

function Home({characters}) {

  const [ searchName, setSearchName ] = useState('');
  const [ searchHouse, setSearchHouse ] = useState('gr');

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
      <CharacterList filteredCharacters={filteredCharacters} searchName={searchName}/>
    </>
  );
}

export default Home;