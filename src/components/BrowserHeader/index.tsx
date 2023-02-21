import { useEffect, useState } from "react";
import { Image } from "../Image";
import { BrowserHeaderComponents, MenuMobileComponents } from "./styles";
import logo from "../../assets/logo/netflix-logo.svg";
import { NavBrowser } from "../NavBrowser";
import { GiHamburgerMenu } from "react-icons/gi";
import { ModalNavigation } from "../NavBrowser/styles";
import { Link } from "react-router-dom";
import { User } from "../../Api/types";

export const BrowserHeader = (props: {
  name: string | undefined;
  img: string | undefined;
}) => {
  const [headerColor, setHeaderColor] = useState("transparent");
  const [activeHamburger, setActiveHamburger] = useState(false);

  const handleScroll = () => {
    const position = window.pageYOffset;
    if (position > 0) {
      setHeaderColor("black");
    } else {
      setHeaderColor("transparent");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = () => {
    if (activeHamburger) {
      setActiveHamburger(false);
    } else {
      setActiveHamburger(true);
    }
  };

  return (
    <BrowserHeaderComponents bg={headerColor}>
      <GiHamburgerMenu onClick={handleClick} className="hamburger" />
      <MenuMobileComponents activeHamburger={activeHamburger}>
        <ul>
          <li>
            <Link to="/profiles">
              <div className="menu-profile">
                <Image src={props?.img} alt="" width={35} height={35} />
                <div className="details-profile-menu">
                  <h3>{props?.name}</h3>
                  <p>Troca de Perfil</p>
                </div>
              </div>
            </Link>
          </li>
          <li>
            <Link to="#">Conta</Link>
          </li>
          <li>
            <Link to="#">Central de Ajuda</Link>
          </li>
          <li>
            <Link to="/">Sair da Netflix</Link>
          </li>
          <hr />
          <li>
            <Link to="#">Início</Link>
          </li>
          <li>
            <Link to="#">Minha Lista</Link>
          </li>
          <li>
            <Link to="#">Suspense</Link>
          </li>
          <li>
            <Link to="#">Para Toda Família</Link>
          </li>
          <li>
            <Link to="#">Filmes e Séries</Link>
          </li>
          <li>
            <Link to="#">Reality Shows</Link>
          </li>
          <li>
            <Link to="#">Anime</Link>
          </li>
          <li>
            <Link to="#">Ação</Link>
          </li>
          <li>
            <Link to="#">Comédia</Link>
          </li>
          <li>
            <Link to="#">Fantasia</Link>
          </li>
        </ul>
      </MenuMobileComponents>
      <Image src={logo} alt="" width={100} height={40} />
      <NavBrowser img={props?.img} />
    </BrowserHeaderComponents>
  );
};
