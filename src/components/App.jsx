import '../styles/App.scss';
import {useState} from "react";

import charactersJson from '../data/characters.json';

import harryLetter from '../../src/images/letras-doradas.png';
import Header from './layout/Header';
import Main from './layout/Main';
import Footer from './layout/Footer';

function App() {

  
  const [ characters, setCharacters ] = useState(charactersJson);
  
  
  

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
                  
   

                  
                
