import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

function Detail({findCharacterByID}) {

  const params = useParams();
  const character = findCharacterByID(params.id);
  console.log(character)

  const termination = character.gender === 'famale' ? 'a':'o';
  return (
    <>
    
    <div className="container_details">
      <Link to="/"  className="return" >Volver</Link>
      <img
        className="character_img info_img"
        src={
          character.image ||
          "https://www.lavanguardia.com/andro4all/hero/2024/02/harry-potter.1708702569.2268.jpg?width=768&aspect_ratio=16:9&format=nowebp"
        }
        alt={`Imagen de ${character.name}`}
      />
      <article className="info_detail">
        <p className="details">Nombre: {character.name}</p>
        <p className="details">Especie: {character.species}</p>
        <p className="details">Estatus: {character.alive ? `Viv${termination}`: `Muert${termination}`}</p>
        <p className="details">Genero: {character.gender}</p>
        <p className="details">Casa: {character.house}</p>
      </article>
    </div>
    </>
  );
}

export default Detail;