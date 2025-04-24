import { FaCarSide } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";
import styles from "./Banner.module.scss";

const Banner = () => {
  const handleButtonClick = () => {
    gtag("event", "click", {
      event_category: "Banner",
      event_label: "Explore Agora", 
    });
  };

  return (
    <div
      className={styles.banner}
      style={{
        backgroundImage: 'url("https://i0.wp.com/loucosporcarro.com.br/wp-content/uploads/2011/05/carro-sol-e-estrada-wallpaper-16412.jpg?ssl=1")', // Imagem fixa para a versão B
      }}
    >
      <div className={styles.overlay}>
        <div className={styles.content}>
          <h1>
            <FaCarSide className={styles.icon} />
            Encontre o <span className={styles.highlight}>carro perfeito</span> para sua jornada
          </h1>
          <p>
            Descubra modelos incríveis com condições especiais para você sair dirigindo hoje.
          </p>

          <button
            className={`${styles.cta} ${styles.ctaB}`} 
            onClick={handleButtonClick} 
          >
            Explore Agora{" "}
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
