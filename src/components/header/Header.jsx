import './Header.css';
import harryLetter from '../../../src/images/letras-doradas.png';

function Header() {
  return (
    <header className="header">
      <img className="logo" src={harryLetter} alt="Titulo de la web" />
    </header>
  );
}

export default Header;