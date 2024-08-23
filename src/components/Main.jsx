import {Routes, Route} from 'react-router-dom';
import Home from "./home/Home";
import Detail from './details/Detail';

function Main({characters}) {

  const findCharacterByID = (id) => characters.find(character => character.id === id);

  return (
    <main>
      <Routes>
        <Route path='/' element={<Home characters={characters}/>}/>
        <Route path='/detail/:id' element={<Detail findCharacterByID={findCharacterByID}/>}/>
      </Routes>
    </main>
  );
}

export default Main;