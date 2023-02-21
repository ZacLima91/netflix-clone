import { HeaderComponent } from "./styles";
import logo from "../../assets/logo/netflix-logo.svg";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <HeaderComponent>
      <div className="header-navbar">
        <div className="container-logo">
          <img src={logo} alt="" />
        </div>
        <div className="content-header">
          <div className="lang-selection-container">
            <select name="Portugues" id="">
              <option value="portugues">Portugues</option>
              <option value="ingles">Inglês</option>
            </select>
          </div>
          <div>
            <Link to="login">Entrar</Link>
          </div>
        </div>
      </div>
    </HeaderComponent>
  );
};
