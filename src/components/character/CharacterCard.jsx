import './CharacterCard.css';
import { Link } from 'react-router-dom';

function CharacterCard({character}) {
  return (
    <Link to={`/detail/${character.id}`} className="character">
      
        <img
          className="character_img"
          src={
            character.image ||
            `https://via.placeholder.com/200x200/ffffff/979256/?text=${character.name.replace(" ", "%0A")}`
          }
          alt={`Imagen de ${character.name}`}
        />
        <div className="character_description">
          <h2 className="character_info ">{character.name}</h2>
          <p className="character_info">{character.species}</p>
        </div>
      
    </Link>
  );
}

export default CharacterCard;