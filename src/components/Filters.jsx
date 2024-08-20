function Filters({ searchName, setSearchName, setSearchHouse }) {

  const handleFilterCharactersByName = (ev) => {
    setSearchName(ev.currentTarget.value); 
  };

  const handleFilterCharactersByHouse = (ev) => {
    setSearchHouse(ev.currentTarget.value); 
  };


  return (
    <form className="container_input">
      <section className="section">
          <label htmlFor="search">Busca por personaje: </label>
          <input
            className="input_section"
            value={searchName}
            onInput={handleFilterCharactersByName}
            type="text"
            name="search"
            id="search"
          />
        </section>
        <div className="select_container">
          <label htmlFor="label_house">Selecciona una casa: </label>
          <select
            className="select_house"
            name="house"
            id="house"
            onChange={handleFilterCharactersByHouse}
          >
            <option value="NS/NC">Opciones</option>
            <option value="gr">Gryffindor</option>
            <option value="sl">Slytherin</option>
            <option value="hu">Hufflepuff</option>
            <option value="ra">Ravenclaw</option>
          </select>
        </div>
      </form>
  );
}

export default Filters;