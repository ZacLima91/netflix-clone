import { SectionComponentAnimationOne } from "./styles";
import tv from "../../assets/images/tv-removebg-preview.png";

export const SectionAnimationOne = () => {
  return (
    <SectionComponentAnimationOne>
      <div className="content-section">
        <div className="content-text">
          <h1>Aproveite na TV.</h1>
          <h2>
            Assista em Smart TVs, PlayStation, Xbox, Chromecast, Apple TV,
            aparelhos de Blu-ray e outros dispositivos.
          </h2>
        </div>
        <div className="content-video">
          <img src={tv} alt="" />
          <video autoPlay playsInline muted loop preload="auto">
            <source
              src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v"
              type="video/mp4"
            />
          </video>
        </div>
      </div>
    </SectionComponentAnimationOne>
  );
};
