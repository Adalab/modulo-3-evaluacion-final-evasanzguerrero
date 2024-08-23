import './Filters.css'

function Filters({ searchName, setSearchName, setSearchHouse }) {

  const handleFilterCharactersByName = (ev) => {
    ev.preventDefault()
    setSearchName(ev.currentTarget.value);
  };

  const handleFilterCharactersByHouse = (ev) => {
    ev.preventDefault()
    setSearchHouse(ev.currentTarget.value);
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
  };

  return (
    
    <div>
      <form onSubmit={handleSubmit}>
        <div className="search">
          <label htmlFor="search">Busca por personaje: </label>
          <input
            className="search_form"
            value={searchName}
            onInput={handleFilterCharactersByName}
            type="text"
            name="search"
            id="search"
          />
        </div>
        <div className="search search_margin">
          <label htmlFor="label_house">Selecciona una casa: </label>
          <select
            className="search_form"
            name="house"
            id="house"
            onChange={handleFilterCharactersByHouse}
          >
            <option selected="true" value="gr">Gryffindor</option>
            <option value="sl">Slytherin</option>
            <option value="hu">Hufflepuff</option>
            <option value="ra">Ravenclaw</option>
          </select>
        </div>
      </form>
    </div>
  );
}

export default Filters;
