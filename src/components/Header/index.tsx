import { ContainerLogoComponent, HeaderComponent, HeaderNavbarComponent } from "./styles";
import logo from "../../assets/logo/netflix-logo.svg";
import { Image } from "../Image";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <HeaderComponent>
      <HeaderNavbarComponent>
        <ContainerLogoComponent>
          <Image src={logo} alt={""} width={120}/>
        </ContainerLogoComponent>
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
      </HeaderNavbarComponent>
    </HeaderComponent>
  );
};
