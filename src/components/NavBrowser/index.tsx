import {
  ModalNavigation,
  NavBrowserComponents,
  NavigationButton,
} from "./styles";
import { IoMdSearch } from "react-icons/io";
import { MdOutlineNotificationsNone } from "react-icons/md";
import { BsFillCaretDownFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { Image } from "../Image";
import { useEffect, useState } from "react";
import { ModalCaret } from "../ModalCaret";

export const NavBrowser = (props: { img: string | undefined }) => {
  const [hovered, setHovered] = useState<boolean>(false);
  const [width, setWidth] = useState(window.innerWidth);
  const [openNavigation, setOpenNavigation] = useState(false);

  useEffect(() => {
    const handleReslize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("resise", handleReslize);

    return () => {
      window.removeEventListener("resize", handleReslize);
    };
  }, []);

  const handleClick = () => {
    if (hovered) {
      setHovered(false);
    } else {
      setHovered(true);
    }
  };

  const handleClickNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false);
    } else {
      setOpenNavigation(true);
    }
  };

  console.log(openNavigation);

  return (
    <NavBrowserComponents>
      <NavigationButton
        showNavigation={openNavigation}
        onClick={handleClickNavigation}
      >
        Navegar
        <BsFillCaretDownFill className="caret-navigation" />
      </NavigationButton>
      <ModalNavigation showNavigation={openNavigation}>
        <ul>
          <li>
            <Link to="#">Início</Link>
          </li>
          <li>
            <Link to="#">Minha Lista</Link>
          </li>
          <hr />
        </ul>
        <ul>
          <li>
            <Link to="#">Suspense</Link>
          </li>
          <li>
            <Link to="#">Reality Show</Link>
          </li>
          <li>
            <Link to="#">Ação</Link>
          </li>
          <li>
            <Link to="#">Ficção científica</Link>
          </li>
          <li>
            <Link to="#">Filmes e séries BR</Link>
          </li>
          <li>
            <Link to="#">Romance</Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link to="#">Para Toda Família</Link>
          </li>
          <li>
            <Link to="#">História LGBTQ</Link>
          </li>
          <li>
            <Link to="#">Comédia</Link>
          </li>
          <li>
            <Link to="#">Terror</Link>
          </li>
          <li>
            <Link to="#">Documentários</Link>
          </li>
          <li>
            <Link to="#">Dramas</Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link to="#">Filmes e Séries MU</Link>
          </li>
          <li>
            <Link to="#">Animes</Link>
          </li>
          <li>
            <Link to="#">Fantasia</Link>
          </li>
          <li>
            <Link to="#">Comédia Stand-up</Link>
          </li>
          <li>
            <Link to="#">Músicas e Musicais</Link>
          </li>
        </ul>
      </ModalNavigation>
      <ul>
        <li>Início</li>
        <li>Séries</li>
        <li>Filmes</li>
        <li>Bombando</li>
        <li>Minha Lista</li>
        <li>Navegar por Idiomas</li>
      </ul>
      <ol className="menu-bar">
        <li>
          <IoMdSearch />
        </li>
        <li>
          <Link to="/browser">Infantil</Link>
        </li>
        <li>
          <MdOutlineNotificationsNone />
        </li>
        <li className="caret" onClick={handleClick}>
          <Image src={props.img} alt="" width={25} height={25} />
          <BsFillCaretDownFill />
        </li>
      </ol>
      <ModalCaret show={hovered} />
    </NavBrowserComponents>
  );
};
