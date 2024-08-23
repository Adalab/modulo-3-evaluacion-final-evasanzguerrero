import { useState } from "react";
import Filters from "../filter/Filters";
import CharacterList from "../character/CharacterList";

function Home({characters}) {

  const [ searchName, setSearchName ] = useState('');
  const [ searchGender, setSearchGender ] = useState('');
  const [ searchHouse, setSearchHouse ] = useState('gr');

  const nameFilter = searchName || localStorage.getItem("searchName")
  const genderFilter = searchGender || localStorage.getItem("searchGender")
  const houseFilter = localStorage.getItem("searchHouse") || searchHouse

  const filteredCharacters = characters
      .filter(characterObj => houseFilter === 'NS/NC' || characterObj.house.toLocaleLowerCase().startsWith(houseFilter.toLocaleLowerCase()))
      .filter(characterObj => genderFilter === "" || characterObj.gender.toLocaleLowerCase() === genderFilter.toLocaleLowerCase())
      .filter(characterObj => characterObj.name.toLocaleLowerCase().includes(nameFilter)).sort((a, b) => {
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
        searchName={nameFilter}   
        setSearchName={setSearchName}
        searchGender={genderFilter}
        setSearchGender={setSearchGender}
        searchHouse={houseFilter}
        setSearchHouse={setSearchHouse}
      />
      <CharacterList filteredCharacters={filteredCharacters} searchName={searchName}/>
    </>
  );
}

export default Home;