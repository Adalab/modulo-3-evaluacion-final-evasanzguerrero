import CharacterCard from "./CharacterCard";

function CharactersList({ filteredCharacters }) {
  return (
    <ul className="containerUl">
      {filteredCharacters.map((character) => (
        <li className="character_list" key={character.id}>
          <CharacterCard character={character} />
        </li>
      ))}
    </ul>
  );
}

export default CharactersList;
