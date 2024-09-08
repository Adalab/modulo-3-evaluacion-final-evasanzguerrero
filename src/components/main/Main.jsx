import {Routes, Route} from 'react-router-dom';
import Home from "../home/Home";
import Detail from '../details/Detail';
import {useState, useEffect} from "react";
import { getCharacterByID, getCharactersApi } from '../../services/charactersApi';
import './Main.css';

function Main() {

  const [ characters, setCharacters ] = useState([]);

  useEffect ( () => {
    getCharactersApi()
     .then(responsedata => {
      setCharacters(responsedata);
    });
  } , []);

  const findCharacterByID = (id) => {
    if(characters.length === 0) {
      return getCharacterByID(id);
    }
    const character = characters.find(character => character.id === id)
    return Promise.resolve([character]);
  }

  return (
    <main className="main">
      <Routes>
        <Route path='/' element={<Home characters={characters}/>}/>
        <Route path='/detail/:id' element={<Detail findCharacterByID={findCharacterByID}/>}/>
      </Routes>
    </main>
  );
}

export default Main;