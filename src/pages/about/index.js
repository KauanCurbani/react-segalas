import "./style.css";
import segalasImg from "../../assets/img/SegalasVermSemS.png";

function About() {
  return (
    <section className="about">
      <div class="about-content">
        <h2 class="reveal">Sobre a Segala's</h2>
        <p class="reveal">
          Estamos desde 1996 atuando com ética e transparência para oferecer
          excelência em cada um dos processos que envolvem nosso negócio.
          Trabalhar com honestidade, gratidão, valorização e pontualidade é o
          que permite fortalecer nosso relacionamento com clientes,
          colaboradores e parceiros.
          <br />
          <br />
          Trabalhamos diariamente para garantir o sucesso de nossas operações,
          acreditando sempre que confiança é a base do nosso negócio. Por isso,
          temos orgulho da nossa história e de tudo que nos trouxe até aqui,
          sabemos que estes 26 anos de história foram de muito aprendizado,
          determinação e paixão e são o resultado de uma trajetória que nos
          mostrou que juntos seremos sempre mais fortes.
        </p>
        <img
          class="reveal"
          src="https://i.postimg.cc/Bb0rprQk/Confian-a-que-se-entrega-vermelho-png.png"
          alt="Confiança que se entrega"
        />
      </div>
    </section>
  );
}
export default About;
