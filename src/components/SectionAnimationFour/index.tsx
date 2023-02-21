import { SectionComponentAnimationFour } from "./styles";
import tv from "../../assets/images/device-pile-removebg-preview.png";

export const SectionAnimationFour = () => {
  return (
    <SectionComponentAnimationFour>
      <div className="content-section">
        <div className="content-video">
          <img src='https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg' alt="" />
        <div className="story-card-animation-four">
            <div className="card-animationfour-img">
              <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png" alt="" />
            </div>
            <div className="card-animationfour-txt">
              <h3>Stranger Things</h3>
              <p>Download em andamento...</p>
            </div>
            <div className="card-animationfour-gif">
              <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/download-icon.gif" alt="" />
            </div>
        </div>
        </div>
        <div className="content-text">
          <h1>Assista quando quiser.</h1>
          <h2>
            Assista no celular, tablet, Smart TV ou notebook sem pagar a mais
            por isso.
          </h2>
        </div>
      </div>
    </SectionComponentAnimationFour>
  );
};
