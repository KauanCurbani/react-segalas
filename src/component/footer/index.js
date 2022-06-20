import "./style.css";
import { IoLogoLinkedin } from "react-icons/io";
import { IoLogoInstagram } from "react-icons/io";
import { IoLogoFacebook } from "react-icons/io";
import sBranco from "../../assets/img/sBranco.png";

function Footer() {
  return (
    <footer>
      <div className="waves">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#f3f3f3"
            fill-opacity="1"
            d="M0,224L80,224C160,224,320,224,480,192C640,160,800,96,960,101.3C1120,107,1280,181,1360,218.7L1440,256L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
          ></path>
        </svg>
      </div>
      <div className="footer-content">
        <div className="footer-left">
          <img className="img-logoFooter" src={sBranco} alt="s-branco" />
          <hr />
          <div className="information-local">
            <a
              href="https://www.google.com/maps/place/Segala's+Alimentos+-+Confian%C3%A7a+que+se+entrega!/@-26.8644559,-49.041953,16z/data=!4m5!3m4!1s0x94df21db3d240fcf:0xfd01cd9a5f79507e!8m2!3d-26.8651936!4d-49.0312153"
              target="_blank"
            >
              Rod Ingo Hering (BR470), 18370, <br />
              Belchior Central Gaspar - SC, 89117-540
              <br />
              (47)3036-1400
            </a>
          </div>
        </div>
        <div className="footer-right">
          <div className="socials">
            <a
              href="https://pt-br.facebook.com/segalasalimentos/"
              target="_blank"
            >
              <IoLogoFacebook className="icon" />
              Segala's Alimentos
            </a>
            <a
              href="https://www.linkedin.com/company/segalas/mycompany/"
              target="_blank"
            >
              <IoLogoLinkedin className="icon" />
              Segala's Alimentos
            </a>
            <a href="https://instagram.com/segalasalimentos" target="_blank">
              <IoLogoInstagram className="icon" />
              @segalasalimentos
            </a>
          </div>
        </div>
      </div>
      <footer className="copyright">
        <p className="copy">
          ©2022 Segala's Alimentos | Todos os direitos reservados
        </p>
      </footer>
    </footer>
  );
}

export default Footer;
