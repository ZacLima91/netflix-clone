import { SectionComponentAnimationTwo } from "./styles";
import tv from "../../assets/images/device-pile-removebg-preview.png";

export const SectionAnimationTwo = () => {
  return (
    <SectionComponentAnimationTwo>
      <div className="content-section">
        <div className="content-video">
          <img src={tv} alt="" />
          <video autoPlay playsInline muted loop preload="auto">
            <source
              src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices.m4v"
              type="video/mp4"
            />
          </video>
        </div>
        <div className="content-text">
          <h1>Assista quando quiser.</h1>
          <h2>
            Assista no celular, tablet, Smart TV ou notebook sem pagar a mais
            por isso.
          </h2>
        </div>
      </div>
    </SectionComponentAnimationTwo>
  );
};
