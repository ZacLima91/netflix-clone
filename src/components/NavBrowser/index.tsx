import { NavBrowserComponents } from "./styles";
import { IoMdSearch } from "react-icons/io";
import { MdOutlineNotificationsNone } from "react-icons/md";
import { BsFillCaretDownFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { Image } from "../Image";
import { useState } from "react";
import { ModalCaret } from "../ModalCaret";

export const NavBrowser = (props: { img: string | undefined }) => {
  const [hovered, setHovered] = useState<boolean>(false);

  const handleClick = () => {
    if (hovered) {
      setHovered(false);
    } else {
      setHovered(true);
    }
  };

  return (
    <NavBrowserComponents>
      <ul>
        <li>Início</li>
        <li>Séries</li>
        <li>Filmes</li>
        <li>Bombando</li>
        <li>Minha Lista</li>
        <li>Navegar por Idiomas</li>
      </ul>
      <ol>
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
