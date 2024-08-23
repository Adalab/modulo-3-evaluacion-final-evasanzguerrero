import CharacterCard from "./CharacterCard";

function CharacterList({ filteredCharacters }) {
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

export default CharacterList;
