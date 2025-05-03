import { useState } from "react";
import styles from "./Footer.module.scss";
import {
  FaCar,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaMapMarkerAlt,
  FaCommentDots,
  FaTimes,
} from "react-icons/fa";
import CarRecommendation from "../CarRecommendation/CarRecommendation";

const Footer = () => {
  const [chatOpen, setChatOpen] = useState(false);
  const [showOptions, setShowOptions] = useState(false);
  const [showCarRecommendation, setShowCarRecommendation] = useState(false);
  const [userMessage, setUserMessage] = useState("");
  const [chatMessages, setChatMessages] = useState<string[]>([]);

  const toggleChat = () => {
    setChatOpen(!chatOpen);
    setShowOptions(false);
    setShowCarRecommendation(false);
    setChatMessages([]); // Limpa o chat ao abrir
  };

  const toggleOptions = () => {
    setShowOptions(!showOptions);
  };

  const toggleCarRecommendation = () => {
    setShowCarRecommendation(!showCarRecommendation);
    setShowOptions(false);
  };

  const handleSendMessage = () => {
    if (!userMessage.trim()) return;

    const mensagem = userMessage.toLowerCase();
    setChatMessages((prev) => [...prev, `Você: ${userMessage}`]);

    let resposta = "Desculpe, não entendi. Pode reformular?";

    if (mensagem.includes("carro") && mensagem.includes("econômico")) {
      resposta =
        "Para carros econômicos na cidade, recomendamos o Renault Kwid ou Fiat Mobi.";
    } else if (mensagem.includes("documento")) {
      resposta =
        "Você precisará de uma CNH válida e cartão de crédito em seu nome.";
    } else if (mensagem.includes("idade mínima")) {
      resposta = "A idade mínima para alugar é de 21 anos.";
    } else if (mensagem.includes("segurança")) {
      resposta =
        "Sempre revise o carro antes de sair e use cinto de segurança.";
    } else if (mensagem.includes("rota") || mensagem.includes("caminho")) {
      resposta =
        "Você pode usar Waze ou Google Maps. Deseja uma sugestão de trajeto?";
    }

    setChatMessages((prev) => [...prev, `LocaBot: ${resposta}`]);
    setUserMessage("");
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

          <div className={styles.section}>
            <h4>Links</h4>
            <ul>
              <li>
                <a href="#">Sobre nós</a>
              </li>
              <li>
                <a href="#">Contato</a>
              </li>
              <li>
                <a href="#">Suporte</a>
              </li>
              <li>
                <a href="#">Termos</a>
              </li>
            </ul>
          </div>

          <div className={styles.section}>
            <h4>Siga-nos</h4>
            <div className={styles.social}>
              <FaFacebookF />
              <FaTwitter />
              <FaInstagram />
              <FaLinkedin />
            </div>
          </div>

          <div className={styles.section}>
            <h4>Newsletter</h4>
            <p>Receba promoções exclusivas no seu e-mail:</p>
            <div className={styles.newsletter}>
              <input type="email" placeholder="Seu e-mail" />
              <button>Inscrever</button>
            </div>
          </div>

          <div className={styles.section}>
            <h4>Localização</h4>
            <div className={styles.map}>
              <FaMapMarkerAlt />
              <span>Rua Exemplo, 123 - Cotia/SP</span>
            </div>
          </div>
        </div>

        <div className={styles.copy}>
          &copy; {new Date().getFullYear()} LocaCar. Todos os direitos
          reservados.
        </div>
      </footer>

      {/* Botão flutuante de chat */}
      <div className={styles.chatButton} onClick={toggleOptions}>
        <FaCommentDots />
      </div>

      {/* Menu flutuante com opções */}
      {showOptions && (
        <div className={styles.optionsMenu}>
          <button onClick={toggleChat}>Chat</button>
          <button onClick={toggleCarRecommendation}>
            Recomendação de Carros
          </button>
        </div>
      )}

      {/* Modal da recomendação de carro */}
      {showCarRecommendation && (
        <div className={styles.carRecommendationModal}>
          <CarRecommendation />
        </div>
      )}

      {/* Modal do chat simulado */}
      {chatOpen && (
        <div className={styles.chatModal}>
          <div className={styles.chatHeader}>
            <span>Suporte ao Cliente</span>
            <FaTimes className={styles.closeIcon} onClick={toggleChat} />
          </div>
          <div className={styles.chatBody}>
            <div className={styles.chatMessages}>
              {chatMessages.map((msg, idx) => (
                <p key={idx}>{msg}</p>
              ))}
            </div>
            <input
              type="text"
              placeholder="Digite sua mensagem..."
              value={userMessage}
              onChange={(e) => setUserMessage(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
            />
            <button onClick={handleSendMessage}>Enviar</button>
          </div>
        </div>
      )}
    </>
  );
};

export default Footer;
