import { HeaderComponent } from "./styles";
import logo from "../../assets/logo/netflix-logo.svg";
import { Link } from "react-router-dom";

export const HeaderLogin = () => {
  return (
    <HeaderComponent>
      <div className="header-navbar">
        <div className="container-logo">
          <img src={logo} alt="" />
        </div>
       
      </div>
    </HeaderComponent>
  );
};