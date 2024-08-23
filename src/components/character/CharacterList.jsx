import CharacterCard from "./CharacterCard";

function CharacterList({ filteredCharacters, searchName }) {
  if(filteredCharacters.length === 0) {
    return (
      <div>No hay ningún personaje que coincida con la palabra {searchName}</div>
    )
  }
  return (
    <section>
      <ul className="containerUl">
        {filteredCharacters.map((character) => (
        <li className="character_list" key={character.id}>
          <CharacterCard character={character} />
        </li>

        ))}
      </ul>
    </section>
  );
}

export default CharacterList;
