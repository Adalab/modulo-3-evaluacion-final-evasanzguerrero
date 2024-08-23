import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

function Detail({findCharacterByID}) {

  const params = useParams();
  const character = findCharacterByID(params.id);
  console.log(character)

  const termination = character.gender === 'famale' ? 'a':'o'
  return (
    <>
      <Link to="/">Volver</Link>
      <img
        className="character_img"
        src={
          character.image ||
          "https://www.lavanguardia.com/andro4all/hero/2024/02/harry-potter.1708702569.2268.jpg?width=768&aspect_ratio=16:9&format=nowebp"
        }
        alt={`Imagen de ${character.name}`}
      />
      <div>
        <p>Nombre: {character.name}</p>
        <p>Especie: {character.species}</p>
        <p>Estatus: {character.alive ? `Viv${termination}`: `Muert${termination}`}</p>
        <p>Genero: {character.gender}</p>
        <p>Casa: {character.house}</p>
      </div>
    </>
  );
}

export default Detail;