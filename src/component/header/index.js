import "./style.css";
import { RiMenu3Fill } from "react-icons/ri";

function Header() {
  window.addEventListener("scroll", function () {
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 600);
  });

  function toggleMenu() {
    var togglebtn = document.querySelector(".toggle");
    togglebtn.classList.toggle("active");
  }

  return (
    <header className="header">
      <img src="https://i.postimg.cc/qBy8McD4/S-Vermelho.png" />
      <div className="toggle">
        <RiMenu3Fill onClick={toggleMenu} />
      </div>
      <nav>
        <ul>
          <li>
            <a href="#about" onClick={toggleMenu}>Sobre a Segala's</a>
          </li>
          <li>
            <a href="#catalogo" onClick={toggleMenu}>Catálogo</a>
          </li>
          <li>
            <a href="#atuacao" onClick={toggleMenu}>Onde Atuamos?</a>
          </li>
          <li>
            <a href="#trabalhe-c" onClick={toggleMenu}>Trabalhe conosco</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default Header;
