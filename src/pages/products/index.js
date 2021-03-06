import "./style.css";
import catalogoBlue from "../../assets/img/catalogoBlue.jpg";
import catalogoRed from "../../assets/img/catalogoRed.jpg";

function Products() {
  return (
    <section className="products" id="catalogo">
      <div className="content-products">
        <h2 className="reveal">Catálogo</h2>
        <p className="reveal">
          Com um mix que possui mais de 3 mil produtos, nacionais e importados,
          temos a opção certa para o seu negócio, venha conferir nossa linha
          completa acessando nossos catálogos abaixo:
        </p>
        <div className="cards reveal">
          <div className="card1 card">
            <img id="imgcard" src={catalogoRed} alt="catalogo1" />
            <a href="./assets/pdf/catalogoRedL.pdf" target="_blank">
              Ver Catálogo{" "}
            </a>
          </div>
          <div className="card2 card">
            <img id="imgcard" src={catalogoBlue} alt="catalogo2" />
            <a
              href="https://drive.google.com/file/d/1j8FPUkRVVCCMt--Cmo9b8ztcr7NHBwR5/view?usp=sharing"
              target="_blank"
            >
              Ver Catálogo{" "}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Products;
