import './Filters.css';

function Filters({ everythingFilters, handleInput, handleReset }) {

  const handleKeyDown = (ev) => {
    if(ev.key === 'Enter') {
      ev.preventDefault();
    }
  };

  return (
    
    <div className="search_container">
      <form  onKeyDown={handleKeyDown}>
        <div className="search">
          <label htmlFor="nameFilter">Busca por personaje: </label>
          <input
            className="search_form"
            value={everythingFilters.nameFilter}
            onInput={handleInput}
            type="text"
            name="nameFilter"
            id="nameFilter"
          />
        </div>
        <div className="search search_margin">
          <label htmlFor="genderFilte">Busca por género: </label>
          <select
            value={everythingFilters.genderFilter}
            className="search_form"
            name="genderFilter"
            id="genderFilter"
            onChange={handleInput}
          >
            <option value=""></option>
            <option value="female">Mujer</option>
            <option value="male">Hombre</option>
          </select>
        </div>
        <div className="search search_margin">
          <label htmlFor="houseFilter">Selecciona una casa: </label>
          <select
            value={everythingFilters.houseFilter}
            className="search_form"
            name="houseFilter"
            id="houseFilter"
            onChange={handleInput}
          >
            <option value="gr">Gryffindor</option>
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
