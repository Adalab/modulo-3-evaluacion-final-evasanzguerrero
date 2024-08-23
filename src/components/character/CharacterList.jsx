import './CharacterList.css';
import CharacterCard from "./CharacterCard";

function CharacterList({ filteredCharacters, searchName }) {
  if(filteredCharacters.length === 0) {
    return (
      <div className="character_list_error">No hay ningún personaje que coincida con la palabra {searchName}</div>
    );
  }
  return (
    <section>
      <ul className="container_ul">
        {filteredCharacters.map((character) => (
        <li className="character_list" key={character.id}>
          <CharacterCard character={character} />
        </li>
        ))};
      </ul>
    </section>
  );
}

export default CharacterList;
