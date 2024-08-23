import '../styles/App.scss';
import harryLetter from '../../src/images/letras-doradas.png';
import Header from './header/Header';
import Main from './Main';
import Footer from './footer/Footer';

function App() {
  
  return (
    <div className="app">
      <Header harryLetter={harryLetter}/>
      <Main/>
      <Footer />
    </div>
  )
}

export default App;
                  
   

                  
                
