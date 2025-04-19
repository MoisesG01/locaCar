import styles from './Footer.module.scss';
import {
  FaCar,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaMapMarkerAlt,
  FaCommentDots,
  FaTimes
} from 'react-icons/fa';
import { useState } from 'react';

const Footer = () => {
  const [chatOpen, setChatOpen] = useState(false);

  const toggleChat = () => {
    setChatOpen(!chatOpen);
  };

  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.container}>
          <div className={styles.section}>
            <div className={styles.logo}>
              <FaCar size={24} />
              <span>LocaCar</span>
            </div>
            <p>Alugue seu carro com conforto, segurança e praticidade.</p>
          </div>

          {/* Links */}
          <div className={styles.section}>
            <h4>Links</h4>
            <ul>
              <li><a href="#">Sobre nós</a></li>
              <li><a href="#">Contato</a></li>
              <li><a href="#">Suporte</a></li>
              <li><a href="#">Termos</a></li>
            </ul>
          </div>

          {/* Redes Sociais */}
          <div className={styles.section}>
            <h4>Siga-nos</h4>
            <div className={styles.social}>
              <FaFacebookF />
              <FaTwitter />
              <FaInstagram />
              <FaLinkedin />
            </div>
          </div>

          {/* Newsletter */}
          <div className={styles.section}>
            <h4>Newsletter</h4>
            <p>Receba promoções exclusivas no seu e-mail:</p>
            <div className={styles.newsletter}>
              <input type="email" placeholder="Seu e-mail" />
              <button>Inscrever</button>
            </div>
          </div>

          {/* Mapa simulado */}
          <div className={styles.section}>
            <h4>Localização</h4>
            <div className={styles.map}>
              <FaMapMarkerAlt />
              <span>Rua Exemplo, 123 - Cotia/SP</span>
            </div>
          </div>
        </div>

        <div className={styles.copy}>
          &copy; {new Date().getFullYear()} LocaCar. Todos os direitos reservados.
        </div>
      </footer>

      {/* Botão de chat */}
      <div className={styles.chatButton} onClick={toggleChat}>
        <FaCommentDots />
      </div>

      {/* Modal do chat */}
      {chatOpen && (
        <div className={styles.chatModal}>
          <div className={styles.chatHeader}>
            <span>Suporte ao Cliente</span>
            <FaTimes className={styles.closeIcon} onClick={toggleChat} />
          </div>
          <div className={styles.chatBody}>
            <p>Olá! Como podemos te ajudar?</p>
            <input type="text" placeholder="Digite sua mensagem..." />
            <button>Enviar</button>
          </div>
        </div>
      )}
    </>
  );
};

export default Footer;
