import '../styles/App.scss';
import {useState, useEffect} from "react";

import { getCharactersApi } from '../services/charactersApi';
import harryLetter from '../../src/images/letras-doradas.png';
import Header from './header/Header';
import Main from './Main';
import Footer from './footer/Footer';

function App() {

  const [ characters, setCharacters ] = useState([]);


  useEffect ( () => {
    getCharactersApi()
     .then(responsedata => {
      setCharacters(responsedata);
    });
  } , [] );

  return (
    <div>
      <Header harryLetter={harryLetter}/>
      <Main characters={characters} />
      <Footer />
    </div>
  )
}

export default App;
                  
   

                  
                
