import { FaqComponent } from "./styles";
import { IoAddOutline } from "react-icons/io5";
import { VscChromeClose } from "react-icons/vsc";
import {
  forwardRef,
  SetStateAction,
  SVGAttributes,
  useRef,
  useState,
} from "react";

const faq = [
  {
    question: " O que é a Netflix?",
    answer:
      " A Netflix é um serviço de streaming que oferece uma ampla variedade de séries, filmes e documentários premiados em milhares de aparelhos conectados à internet. Você pode assistir a quantos filmes e séries quiser, quando e onde quiser – tudo por um preço mensal acessível. Aqui você sempre encontra novidades. A cada semana, adicionamos novas séries e filmes.",
  },
  {
    question: "Quanto custa a Netflix?",
    answer:
      "Assista à Netflix no seu celular, tablet, Smart TV, notebook ou aparelho de streaming por uma taxa mensal única. Os planos variam de R$18,90 a R$55,90 por mês. Sem contrato nem taxas extras.",
  },
  {
    question: "Quais são as diferenças de um plano com anúncios?",
    answer: `Um plano com anúncios é uma excelente maneira de assistir a séries e filmes por um preço mais baixo. Você pode assistir ao seu conteúdo favorito com intervalos limitados para anúncios (sujeito a restrições de localização e aparelho). Este plano não permite fazer downloads e não inclui algumas séries e filmes com restrições de licenciamento. ${(
      <a href="#">Saiba mais</a>
    )}.`,
  },
  {
    question: "Onde posso assistir?",
    answer:
      "Assista onde quiser, quando quiser. Faça login com sua conta Netflix em netflix.com para começar a assistir no computador ou em qualquer aparelho conectado à Internet compatível com o aplicativo Netflix, como Smart TVs, smartphones, tablets, aparelhos de streaming e videogames. Você também pode baixar a sua série favorita com o aplicativo Netflix para iOS, Android ou Windows 10. Use downloads para levar a Netflix para onde quiser sem precisar de conexão com a Internet. Leve a Netflix com você para qualquer lugar.",
  },
  {
    question: "Como faço para cancelar? ",
    answer:
      "A Netflix é flexível. Não há contratos nem compromissos. Você pode cancelar a sua conta na internet com apenas dois cliques. Não há taxa de cancelamento – você pode começar ou encerrar a sua assinatura a qualquer momento.",
  },
  {
    question: "O que eu posso assistir na Netflix?",
    answer:
      "A Netflix tem um grande catálogo de filmes, documentários, séries, originais Netflix premiados e muito mais. Assista o quanto quiser, quando quiser.",
  },
  {
    question: "A Netflix é adequada para crianças?",
    answer:
      "A experiência infantil da Netflix faz parte da sua assinatura para que as crianças se divirtam em seu próprio espaço com séries e filmes familiares sob a supervisão dos responsáveis. O recurso de controle parental, incluso nos perfis para crianças e protegido por PIN, permite restringir a classificação etária do conteúdo que as crianças podem ver e bloquear títulos específicos que você não quer que elas assistam.",
  },
];

export const FaqCard = () => {
  const [isOpen, setIsOpen] = useState<SetStateAction<null | string>>(null);
  const [rotate, setRotate] = useState(false);

  const openModal = (modalId: string) => {
    setIsOpen(modalId);
  };

  const closeModal = () => {
    setIsOpen(null);
  };

  const toggleRotate = () => {
    setRotate(!rotate);
  };
  return (
    <FaqComponent open={rotate}>
      <div className="container-faq">
        <h1>Perguntas frequentes</h1>
        <ul>
          {faq.map((item, i) => (
            <li>
              <button
                className="openModal"
                onClick={() => {
                  if (isOpen === `modal${i}`) {
                    toggleRotate();
                    closeModal();
                  } else {
                    toggleRotate();
                    openModal(`modal${i}`);
                  }
                }}
              >
                <span>{item.question}</span>
                <IoAddOutline
                  className={
                    rotate && isOpen === `modal${i}` ? "rotate-icon" : ""
                  }
                />
              </button>
              {isOpen == `modal${i}` && (
                <div key={i} className="faq-answer">
                  <p>{item.answer}</p>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </FaqComponent>
  );
};
