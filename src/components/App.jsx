import '../styles/App.scss';
import {useState, useEffect} from "react";

import harryLetter from '../../src/images/letras-doradas.png';
import Header from './layout/Header';
import Main from './layout/Main';
import Footer from './layout/Footer';

function App() {

  const [ characters, setCharacters ] = useState([]);


  useEffect ( () => {
    fetch('https://hp-api.onrender.com/api/characters/house/gryffindor')
  .then(response =>response.json())
  .then(respnsedata => {
    setCharacters(respnsedata);
  })
  } , [] );

  return (
    <div>
      <Header harryLetter={harryLetter}/>
      <Main characters={characters} />
      <div className="conta">
        <Footer />
      </div>
    </div>
  )
}

export default App;
                  
   

                  
                
