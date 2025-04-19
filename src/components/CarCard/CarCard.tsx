import styles from './CarCard.module.scss';
import { FaGasPump, FaCarSide, FaMoneyBillWave, FaCogs, FaDoorOpen, FaSuitcase } from 'react-icons/fa';

interface CarCardProps {
  name: string;
  model: string;
  pricePerDay: number;
  imageUrl: string;
  fuel: string;
  available: boolean;
  gears: number;
  doors: number;
  luggageCapacity: number;
}

const CarCard = ({ name, model, pricePerDay, imageUrl, fuel, available, gears, doors, luggageCapacity }: CarCardProps) => {
  return (
    <div className={`${styles.card} ${!available ? styles.unavailable : ''}`}>
      <div className={styles.imageWrapper}>
        <img src={imageUrl} alt={`${name} ${model}`} className={styles.image} />
        <div className={`${styles.badge} ${available ? styles.available : styles.unavailable}`}>
          {available ? 'Disponível' : 'Indisponível'}
        </div>
      </div>

      <div className={styles.details}>
        <h3 className={styles.title}>
          {name} <span>{model}</span>
        </h3>

        <div className={styles.info}>
          <div><FaGasPump /> <span>{fuel}</span></div>
          <div><FaMoneyBillWave /> <span>R$ {pricePerDay.toFixed(2)}/dia</span></div>
        </div>

        <div className={styles.specs}>
          <div><FaCogs /> {gears} Marchas</div>
          <div><FaDoorOpen /> {doors} Portas</div>
          <div><FaSuitcase /> {luggageCapacity} Bagagem</div>
        </div>

        <button className={styles.reserveBtn}>
          <FaCarSide />
          Reservar agora
        </button>
      </div>
    </div>
  );
};

export default CarCard;
