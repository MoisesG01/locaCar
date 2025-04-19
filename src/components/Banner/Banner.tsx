import styles from './Banner.module.scss';
import { FaCarSide } from 'react-icons/fa';
import { FaArrowRight } from 'react-icons/fa6';

const Banner = () => {
  return (
    <div className={styles.banner}>
      <div className={styles.overlay}>
        <div className={styles.content}>
          <h1>
            <FaCarSide className={styles.icon} />
            Encontre o <span className={styles.highlight}>carro perfeito</span> para sua jornada
          </h1>
          <p>Descubra modelos incríveis com condições especiais para você sair dirigindo hoje.</p>
          <button className={styles.cta}>
            Ver Ofertas <FaArrowRight className={styles.arrow} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
