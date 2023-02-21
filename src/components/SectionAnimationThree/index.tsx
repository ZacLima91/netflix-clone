import { SectionComponentAnimationThree } from "./styles";
import tv from "../../assets/images/device-pile-removebg-preview.png";

export const SectionAnimationThree = () => {
  return (
    <SectionComponentAnimationThree>
      <div className="content-section">
        <div className="content-text">
          <h1>Crie perfis para crianças.</h1>
          <h2>
            Deixe as crianças se aventurarem com seus personagens favoritos em
            um espaço feito só para elas, sem pagar a mais por isso.
          </h2>
        </div>
        <div className="content-video">
          <img
            src="https://occ-0-5137-3851.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABWGB3YOpSh2wA7OOZQYD-MkalQ0oJEy-YEEpoPKAIenLtZf5lKeERDdKj-u6WnZx9wx_QuiDVHkGM_1QmVQt9yxM7mKjevBNHKFz.png?r=1b8"
            alt=""
          />
          <video autoPlay playsInline muted loop preload="auto"></video>
        </div>
      </div>
    </SectionComponentAnimationThree>
  );
};
