import { FooterComponent } from "./styles";

export const Footer = () => {
  return (
    <FooterComponent>
      <div className="container-footer">
        <h3>
          Dúvidas? Ligue <a href="#">0800 591 8942</a>{" "}
        </h3>

        <ul>
          <li>
            <a href="#">Perguntas frequentes</a>
          </li>
          <li>
            <a href="#">Central de Ajuda</a>
          </li>
          <li>
            <a href="#">Conta</a>
          </li>
          <li>
            <a href="#">Media Center</a>
          </li>
          <li>
            <a href="#">Relações com investidores</a>
          </li>
          <li>
            <a href="#">Carreiras</a>
          </li>
          <li>
            <a href="#">Resgatar cartão pré-pago</a>
          </li>
          <li>
            <a href="#">Comprar cartão pré-pago</a>
          </li>
          <li>
            <a href="#">Formas de assistir</a>
          </li>
          <li>
            <a href="#">Termos de Uso</a>
          </li>
          <li>
            <a href="#">Privacidade</a>
          </li>
          <li>
            <a href="#">Preferências de cookies</a>
          </li>
          <li>
            <a href="#">Informações corporativas</a>
          </li>
          <li>
            <a href="#">Entre em contato</a>
          </li>
          <li>
            <a href="#">Teste de velocidade</a>
          </li>
          <li>
            <a href="#">Avisos legais</a>
          </li>
          <li>
            <a href="#">Só na Netflix</a>
          </li>
        </ul>

        <div className="lang-selection-container">
          <select name="Portugues" id="">
            <option value="portugues">Portugues</option>
            <option value="ingles">Inglês</option>
          </select>
        </div>
        <p>Netfilx Brasil</p>
      </div>
    </FooterComponent>
  );
};
