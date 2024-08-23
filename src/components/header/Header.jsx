import './Header.css'

function Header({harryLetter}) {
  return (
    <header className="header">
      <img className="logo" src={harryLetter} alt="Titulo de la web" />
    </header>
  );
}

export default Header;