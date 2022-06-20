import "./style.css";
import segalasImg from "../../assets/img/SegalasVermSemS.png";

function Home() {

  return (
    <section className="home">
      <div className="text-home">
        <img src={ segalasImg } alt="" class="imgHome" />
        <p>
        Entre as maiores distribuidoras de alimentos frigorificados do Brasil, especializada em entregar qualidade e confiança!
        </p>
        <a href="#about" className="homeButton">
          Saiba mais!
        </a>
      </div>
    </section>
  );
}
export default Home;
