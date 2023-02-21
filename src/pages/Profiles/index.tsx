import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { api } from "../../Api";
import { User } from "../../Api/types";
import { Image } from "../../components/Image";
import {
  CardProfile,
  ComponentsProfiles,
  ContainerAvatar,
  ContentProfiles,
} from "./styles";

export const profiles = [
  "http://occ-0-5137-3852.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABY5cwIbM7shRfcXmfQg98cqMqiZZ8sReZnj4y_keCAHeXmG_SoqLD8SXYistPtesdqIjcsGE-tHO8RR92n7NyxZpqcFS80YfbRFz.png?r=229",
  "http://occ-0-5137-3852.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABe67usDrFCN4Ntk-n_LKNwhJxvQkZf95_L-Sj-QFJ8kqTdWgH9hjmKtEdehX2PRLV7tUm9JGfi9U9SvByCeg8dDumU91qHdLbEGm.png?r=e6c",
  "http://occ-0-5137-3852.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABVPGd8MNBaqbEPi4pIr71tzngSEKpxT3fNIfUrw5w8Fvapf9wyAsyqKk0k8O-UwaUzgUUM1EFCLZEJjMYheRjmrbRszfAXqmE0ng.png?r=8d8",
  "http://occ-0-5137-3852.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABWY4hABBS1RnrPZcSnDVjgcX9j68wPjtJmwf2qPraFrNkfLlYCUIhwaveEEgrEKR3ACMky2WrYT6S8EOwCXiXj0QiErM-etAfQa3.png?r=11f",
];

export const Profiles = () => {
  const [items, setItems] = useState<User[] | undefined>([]);

  useEffect(() => {
    const getAllMovies = async () => {
      const response = await api.getUsers();
      setItems(response);
    };
    getAllMovies();
  }, []);

  return (
    <ComponentsProfiles>  
      <ContentProfiles>
        <h1>Quem está assistindo?</h1>
        <ContainerAvatar>
          {items?.map((item, i) => (
            <CardProfile key={i}>
              <Link to={`/browser/${item.id}`}>
                <Image
                  key={i}
                  src={item.img}
                  alt={""}
                  width={120}
                  height={120}
                />
              </Link>
              <p>Avatar {i + 1}</p>
            </CardProfile>
          ))}
        </ContainerAvatar>
      </ContentProfiles>
    </ComponentsProfiles>
  );
};
