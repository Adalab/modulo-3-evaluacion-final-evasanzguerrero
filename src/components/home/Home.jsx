import { useState } from "react";
import Filters from "../filter/Filters";
import CharacterList from "../character/CharacterList";

function Home({characters}) {

  const [ searchName, setSearchName ] = useState('');
  const [ searchGender, setSearchGender ] = useState('');
  const [ searchHouse, setSearchHouse ] = useState('gr');

  const filteredCharacters = characters
      .filter(characterObj => searchHouse === 'NS/NC' || characterObj.house.toLocaleLowerCase().startsWith(searchHouse.toLocaleLowerCase()))
      .filter(characterObj => searchGender === "" || characterObj.gender.toLocaleLowerCase() === searchGender.toLocaleLowerCase())
      .filter(characterObj => characterObj.name.toLocaleLowerCase().includes(searchName.toLocaleLowerCase())).sort((a, b) => {
        if (a.name < b.name) {
          return -1;
        }
        if (a.name > b.name) {
          return 1;
        }
        return 0;
      });

  return (
    <>
      <Filters 
        searchName={searchName}   
        setSearchName={setSearchName}
        searchGender={searchGender}
        setSearchGender={setSearchGender}
        searchHouse={searchHouse}
        setSearchHouse={setSearchHouse}
      />
      <CharacterList filteredCharacters={filteredCharacters} searchName={searchName}/>
    </>
  );
}

export default Home;