import { useEffect, useState } from "react";
import { api } from "../../Api";
import { User } from "../../Api/types";
import { Image } from "../Image";
import { ModalCaretComponent } from "./styles";
import { FiEdit2, FiHelpCircle } from "react-icons/fi";
import { BiTransferAlt } from "react-icons/bi";
import { MdOutlineAccountCircle } from "react-icons/md";
import { useNavigate } from "react-router-dom";

interface ModalCaretProps {
  show: boolean;
}

export const ModalCaret = ({ show }: ModalCaretProps) => {
  const [items, setItems] = useState<User[] | undefined>([]);

  const navigate = useNavigate();

  useEffect(() => {
    const getAllMovies = async () => {
      const response = await api.getUsers();
      setItems(response);
    };
    getAllMovies();
  }, []);

  const handleClick = (id: string | undefined): any => {
    navigate("/browser/" + id);
    location.reload();
  };

  const logout = () => {
    navigate("/");
  };

  return (
    <ModalCaretComponent show={show}>
      <ul>
        {items?.map((item, i) => (
          <li key={i} onClick={() => handleClick(item.id)}>
            <Image src={item.img} alt="" width={25} height={25} />
            <p>{item.userName}</p>
          </li>
        ))}
        <li>
          <FiEdit2 /> Gerenciar Perfis
        </li>
        <li>
          <BiTransferAlt /> Transferir Perfis
        </li>
        <li>
          <MdOutlineAccountCircle />
          Conta
        </li>
        <li>
          <FiHelpCircle />
          Central de Ajuda
        </li>
        <hr />
        <li className="logout" onClick={logout}>
          <p>Sair da Netflix</p>
        </li>
      </ul>
    </ModalCaretComponent>
  );
};
