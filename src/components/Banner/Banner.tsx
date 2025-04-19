import { useState, useEffect } from "react";
import styles from "./Banner.module.scss";
import { FaCarSide } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";

const Banner = () => {
  const [version, setVersion] = useState("A"); // 'A' ou 'B'

  useEffect(() => {
    const randomVersion = Math.random() < 0.5 ? "A" : "B";
    setVersion(randomVersion);
  }, []);

  const isVersionB = version === "B";

  // Função para rastrear o clique no botão
  const handleButtonClick = () => {
    gtag("event", "click", {
      event_category: "Banner",
      event_label: isVersionB ? "Explore Agora" : "Ver Ofertas",
    });
  };

  return (
    <div
      className={styles.banner}
      style={{
        backgroundImage: isVersionB
          ? 'url("https://i0.wp.com/loucosporcarro.com.br/wp-content/uploads/2011/05/carro-sol-e-estrada-wallpaper-16412.jpg?ssl=1")' // Imagem para versão B
          : 'url("https://britolocadora.com/wp-content/uploads/2023/11/oroch-brito-celular3-1024x507.png")', // Imagem para versão A
      }}
    >
      <div className={styles.overlay}>
        <div className={styles.content}>
          <h1>
            <FaCarSide className={styles.icon} />
            Encontre o <span className={styles.highlight}>
              carro perfeito
            </span>{" "}
            para sua jornada
          </h1>
          {/* Alteração de subtítulo */}
          <p>
            {isVersionB
              ? "Descubra modelos incríveis com condições especiais para você sair dirigindo hoje."
              : "Aproveite ofertas imperdíveis com nossa nova frota de carros."}
          </p>

          {/* CTA - Variável de Texto e Estilo */}
          <button
            className={`${styles.cta} ${
              isVersionB ? styles.ctaB : styles.ctaA
            }`}
            onClick={handleButtonClick} // Rastreando o clique
          >
            {isVersionB ? "Explore Agora" : "Ver Ofertas"}{" "}
            <FaArrowRight className={styles.arrow} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
function gtag(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _arg0: string,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _arg1: string,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _arg2: { event_category: string; event_label: string }
) {
  throw new Error("Function not implemented.");
}
