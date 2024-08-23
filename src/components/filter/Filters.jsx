import './Filters.css'

function Filters({ searchName, setSearchName, searchGender, setSearchGender, searchHouse, setSearchHouse }) {

  const handleFilterCharactersByName = (ev) => {
    ev.preventDefault()
    setSearchName(ev.currentTarget.value);
  };

  const handleFilterCharactersByGender = (ev) => {
    ev.preventDefault()
    setSearchGender(ev.currentTarget.value);
  };

  const handleFilterCharactersByHouse = (ev) => {
    ev.preventDefault()
    setSearchHouse(ev.currentTarget.value);
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
  };

  const handleReset = (ev) => {
    setSearchGender("")
    setSearchHouse("")
    setSearchName("")
  };

  return (
    
    <div className="search_container">
      <form onSubmit={handleSubmit}>
        <div className="search">
          <label htmlFor="search_by_name">Busca por personaje: </label>
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
          <label htmlFor="search_by_gender">Busca por género: </label>
          <select
            value={searchGender}
            className="search_form"
            name="gender"
            id="gender"
            onChange={handleFilterCharactersByGender}
          >
            <option selected={true} value=""></option>
            <option value="female">Mujer</option>
            <option value="male">Hombre</option>
          </select>
        </div>
        <div className="search search_margin">
          <label htmlFor="label_house">Selecciona una casa: </label>
          <select
            value={searchHouse}
            className="search_form"
            name="house"
            id="house"
            onChange={handleFilterCharactersByHouse}
          >
            <option selected={true} value="gr">Gryffindor</option>
            <option value="sl">Slytherin</option>
            <option value="hu">Hufflepuff</option>
            <option value="ra">Ravenclaw</option>
          </select>
        </div>
        <button onClick={handleReset} className="search_reset">Reset</button>
      </form>
    </div>
  );
}

export default Filters;
