function CharacterCard({character}) {
  return (
    <div className="character">
            <img
              className="character_img"
              src={
                character.image ||
                "https://www.lavanguardia.com/andro4all/hero/2024/02/harry-potter.1708702569.2268.jpg?width=768&aspect_ratio=16:9&format=nowebp"
              }
              alt={`Imagen de ${character.name}`}
            />
            <div className="character_info">
              <h2 className="character">{character.name}</h2>
              <p className="character">{character.species}</p>
            </div>
          </div>
  );
}

export default CharacterCard;