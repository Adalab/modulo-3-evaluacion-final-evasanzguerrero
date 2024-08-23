import './Detail.css'
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

function Detail({findCharacterByID}) {

  const params = useParams();
  const character = findCharacterByID(params.id);

  const translateAlive = (alive) => {
    if (alive) {
      return 'Vivo';
    } else {
      return 'Muerto';
    }
  }

  const translaterGender = (gender) => {
    if (gender === 'female') {
      return 'Femenino';
    } else {
      return 'Masculino';
    }
  }
  const translateSpecies = (especies) => {
    if (especies === 'female') {
      return 'Humana';
    } else {
      return 'Humano';
    } 
  }
  if(character === undefined) {
    return (
      <div className='container_details'>
        <Link to="/" className="back" >Volver</Link>
        <div className="details_error">No se ha encontrado el personaje</div>
      </div>
    );
  }

  return (
    <>
      <div className="container_details">
        <Link to="/"  className="back" >Volver</Link>
        <img
          className="detail_img"
          src={
            character.image ||
            "https://www.lavanguardia.com/andro4all/hero/2024/02/harry-potter.1708702569.2268.jpg?width=768&aspect_ratio=16:9&format=nowebp"
          }
          alt={`Imagen de ${character.name}`}
        />
        <article className="info_detail">
          <p className="details">Nombre: {character.name}</p>
          <p className="details">Estatus: {translateAlive(character.alive)} - <i className="fa-solid fa-heart-pulse"/></p>
          <p className="details">Especies: {translateSpecies(character.species)} - <i className="fa-solid fa-user"/></p>
          <p className="details">Genero: {translaterGender(character.gender)}</p>
          <p className="details">Casa: {character.house}</p>
        </article>
      </div>
    </>
  );
}

export default Detail;