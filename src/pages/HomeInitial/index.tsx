import { Header } from "../../components/Header";
import { HomeComponent } from "./styles";
import { AiOutlineRight } from "react-icons/ai";
import { SectionAnimationOne } from "../../components/SectionAnimationOne";
import { SectionAnimationTwo } from "../../components/SectionAnimationTwo";
import { SectionAnimationThree } from "../../components/SectionAnimationThree";
import { SectionAnimationFour } from "../../components/SectionAnimationFour";
import { FaqCard } from "../../components/FaqCard";
import { Footer } from "../../components/Footer";

export const HomeInitial = () => {
  return (
    <HomeComponent>
      <div className="card-background">
        <Header />
        <div className="container-card">
          <div className="card-story-text">
            <h1>Filmes, séries e muito mais. Sem limites.</h1>
            <h3>Assista onde quiser. Cancele quando quiser.</h3>
            <p>
              Quer assistir? Informe seu email para criar ou reiniciar sua
              assinatura.
            </p>
            <div className="email-form-creating">
              <form>
                <label>
                  <span> Email</span>

                  <input type="text" />
                </label>
              </form>
              <button>
                 Vamos lá<AiOutlineRight />
              </button>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <SectionAnimationOne />
      <hr />
      <SectionAnimationTwo />
      <hr />
      <SectionAnimationThree />
      <hr />
      <SectionAnimationFour />
      <hr />
      <FaqCard />
      <hr />
      <Footer/> 
    </HomeComponent>
  );
};
