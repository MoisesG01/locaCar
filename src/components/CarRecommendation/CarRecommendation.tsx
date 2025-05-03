import { useState, useEffect } from "react";
import styles from "./CarRecommendation.module.scss";

type Step =
  | "inicio"
  | "uso"
  | "pessoas"
  | "economia"
  | "pensando"
  | "resultado";

const CarRecommendation = () => {
  const [step, setStep] = useState<Step>("inicio");
  const [uso, setUso] = useState("");
  const [pessoas, setPessoas] = useState("");
  const [economia, setEconomia] = useState("");
  const [mensagens, setMensagens] = useState<string[]>([]);
  const [showModal, setShowModal] = useState(true); // Modal já aberto ao carregar o componente

  // Função para adicionar mensagens
  const addMensagem = (texto: string) => {
    setMensagens((prevMensagens) => [...prevMensagens, texto]);
  };

  // Função para lidar com o avanço de cada etapa
  const handleNext = (resposta: string) => {
    switch (step) {
      case "inicio":
        setStep("uso");
        addMensagem("Qual será o uso principal do carro?");
        break;
      case "uso":
        setUso(resposta);
        addMensagem(
          `Você escolheu para ${formatarTexto(
            resposta
          )}. Quantas pessoas usarão o carro?`
        );
        setStep("pessoas");
        break;
      case "pessoas":
        setPessoas(resposta);
        addMensagem(
          `Você escolheu ${formatarTexto(
            resposta
          )}. A economia de combustível é importante para você?`
        );
        setStep("economia");
        break;
      case "economia":
        setEconomia(resposta);
        addMensagem(
          `Você escolheu que a economia de combustível é ${
            resposta === "sim" ? "importante" : "não importante"
          }.`
        );
        setStep("pensando");
        delay(() => {
          const recomendacao = gerarRecomendacao(uso, pessoas, economia);
          addMensagem(`Aqui está a sua recomendação:\n${recomendacao}`);
          setStep("resultado");
        }, 2000);
        break;
      default:
        break;
    }
  };

  // Função para gerar recomendação com base nas respostas
  const gerarRecomendacao = (
    uso: string,
    pessoas: string,
    economia: string
  ) => {
    if (uso === "cidade" && economia === "sim" && pessoas === "1-2") {
      return "👉 Recomendamos o *Renault Kwid* ou *Fiat Mobi*. São ótimos para o uso urbano e econômicos!";
    } else if (uso === "viagem" && pessoas === "5+" && economia === "nao") {
      return "👉 Uma *SUV* como o *Jeep Compass* ou uma *Minivan* como o *Chevrolet Spin* seria ideal para viagens em grupo!";
    } else if (uso === "trabalho" && pessoas === "1-2") {
      return "👉 Uma *Fiat Strada* seria uma boa opção, útil e versátil para o trabalho diário.";
    } else {
      return "👉 Um *sedã* como o *Toyota Etios Sedan* pode ser uma opção equilibrada entre conforto, espaço e eficiência.";
    }
  };

  // Função para formatar as respostas de forma amigável
  const formatarTexto = (txt: string) => {
    const map: Record<string, string> = {
      cidade: "uso urbano",
      viagem: "viagens",
      trabalho: "trabalho",
      "1-2": "1 a 2",
      "3-4": "3 a 4",
      "5+": "5 ou mais",
      sim: "Sim",
      nao: "Não",
    };
    return map[txt] || txt;
  };

  // Função de delay para simular processamento de IA
  const delay = (callback: () => void, time = 1000) => {
    setTimeout(callback, time);
  };

  // Função para retornar as opções com base no estado atual
  const renderOpcoes = () => {
    switch (step) {
      case "inicio":
        return ["Sim, vamos começar"];
      case "uso":
        return ["cidade", "viagem", "trabalho"];
      case "pessoas":
        return ["1-2", "3-4", "5+"];
      case "economia":
        return ["sim", "nao"];
      default:
        return [];
    }
  };

  // Função para fechar o modal
  const handleCloseModal = () => {
    setShowModal(false);
    setStep("inicio");
    setUso("");
    setPessoas("");
    setEconomia("");
    setMensagens([]);
  };

  useEffect(() => {
    // Abrir o modal automaticamente ao carregar o componente
    setShowModal(true);
  }, []);

  return (
    <div>
      {/* Modal */}
      {showModal && (
        <div className={styles.modalBackdrop} onClick={handleCloseModal}>
          <div
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <h2>🤖 LocaBot - Assistente Virtual</h2>
            <h3>
              👋 Olá! Eu sou o LocaBot, seu assistente virtual para
              recomendações de carros. 🚗
            </h3>
            <h4>🚘 Vamos começar?</h4>
            <div className={styles.chat}>
              {/* Exibe as mensagens do chatbot */}
              {mensagens.map((msg, idx) => (
                <div key={idx} className={styles.botBubble}>
                  <div className={styles.avatar}>🤖</div>
                  <div className={styles.bubbleText}>{msg}</div>
                </div>
              ))}

              {/* Exibe as opções para o usuário com base no passo atual */}
              {step !== "resultado" && step !== "pensando" && (
                <div className={styles.options}>
                  {renderOpcoes().map((op) => (
                    <button
                      key={op}
                      onClick={() => handleNext(op)}
                      className={styles.optionButton}
                    >
                      {formatarTexto(op)}
                    </button>
                  ))}
                </div>
              )}

              {/* Tela "pensando" enquanto processa a recomendação */}
              {step === "pensando" && (
                <div className={styles.botBubble}>
                  <div className={styles.avatar}>🤖</div>
                  <div className={styles.typing}>
                    <span>.</span>
                    <span>.</span>
                    <span>.</span>
                  </div>
                </div>
              )}

              {/* Tela final com a recomendação do carro */}
              {step === "resultado" && (
                <button
                  className={styles.restart}
                  onClick={() => {
                    setStep("inicio");
                    setUso("");
                    setPessoas("");
                    setEconomia("");
                    setMensagens([]);
                  }}
                >
                  🔁 Fazer nova recomendação
                </button>
              )}
            </div>

            {/* Fechar Modal */}
            <button className={styles.closeButton} onClick={handleCloseModal}>
              Fechar
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CarRecommendation;
