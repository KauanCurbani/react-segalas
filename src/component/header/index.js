import "./style.css";
import { RiMenu3Fill } from "react-icons/ri";

function Header() {
  return (
    <header className="header">
      <img src="https://i.postimg.cc/qBy8McD4/S-Vermelho.png" />
      <div className="toggle">
        <RiMenu3Fill />
      </div>
      <nav>
        <ul>
          <li>
            <a href="#about">Sobre a Segala's</a>
          </li>
          <li>
            <a href="#catalogo">Catálogo</a>
          </li>
          <li>
            <a href="#areas">Onde Atuamos?</a>
          </li>
          <li>
            <a href="#trabalhe-c">Trabalhe conosco</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default Header;
