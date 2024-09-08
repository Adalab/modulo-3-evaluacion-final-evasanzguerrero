import { useState } from "react";
import Filters from "../filter/Filters";
import CharacterList from "../character/CharacterList";

function Home({characters}) {

  const [ everythingFilters, setEverythingFilters ] = useState( {
    nameFilter: "",
    genderFilter: "",
    houseFilter: "gr"
  } );

  const handleReset = (ev) => {
    ev.preventDefault();
    setEverythingFilters( {
      nameFilter: "",
      genderFilter: "",
      houseFilter: "gr"
    } );
    localStorage.removeItem("dataFilter");
  };

  const handleInput = (ev) => {
    const key = ev.currentTarget.name;
    const newFilters = { ...everythingFilters, [key]: ev.currentTarget.value };
    setEverythingFilters(newFilters);
    localStorage.setItem("dataFilter", JSON.stringify(newFilters));
  };

  const dataFilter = localStorage.getItem("dataFilter")
  const filters = dataFilter ? JSON.parse(dataFilter) : everythingFilters

  const filteredCharacters = characters
      .filter(characterObj => filters.houseFilter === 'NS/NC' || characterObj.house.toLocaleLowerCase().startsWith(filters.houseFilter.toLocaleLowerCase()))
      .filter(characterObj => filters.genderFilter === "" || filters.genderFilter == null || characterObj.gender.toLocaleLowerCase() === filters.genderFilter.toLocaleLowerCase())
      .filter(characterObj => filters.nameFilter == null || characterObj.name.toLocaleLowerCase().includes(filters.nameFilter))
      .sort((a, b) => {
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
        everythingFilters={filters}
        handleInput={handleInput}
        handleReset={handleReset}
      />
      <CharacterList filteredCharacters={filteredCharacters} nameFilte={filters.nameFilter}/>
    </>
  );
}

export default Home;