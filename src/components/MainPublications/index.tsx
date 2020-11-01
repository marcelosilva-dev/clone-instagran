import React from "react";

import { Container, ContainerMiddle1, ContainerMiddle2 } from "./styles";
import Card from "./cards";
import Swiper from "../Swiper";

const avatar =
  "https://instagram.fpfb5-1.fna.fbcdn.net/v/t51.2885-19/s150x150/66395784_439797356611676_4373976148577615872_n.jpg?_nc_ht=instagram.fpfb5-1.fna.fbcdn.net&_nc_ohc=1nzpcPeGo-8AX8aTNic&oh=e352fca2043c5a3c743b512ef4535bf7&oe=5FC66DF1";

const img1 =
  "https://instagram.fpfb5-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s750x750/123128659_1832402620250164_8920961520954801742_n.jpg?_nc_ht=instagram.fpfb5-1.fna.fbcdn.net&_nc_cat=1&_nc_ohc=MdWYIRy-j1UAX_1EyJU&_nc_tp=24&oh=722964c40fa8fcca558435af9a19f6b7&oe=5FC90D44";

const img2 =
  "https://instagram.fpfb5-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/p750x750/123139232_1243604812691413_4488644467558489092_n.jpg?_nc_ht=instagram.fpfb5-1.fna.fbcdn.net&_nc_cat=1&_nc_ohc=tVSWxdKUkKgAX-6DIhA&_nc_tp=25&oh=1830fdd209073f41dce57626f0ce3add&oe=5FC92157";

const img3 = "https://i.ytimg.com/vi/-6Zdm90-xBA/maxresdefault.jpg";

const avatar2 =
  "https://instagram.fpfb5-1.fna.fbcdn.net/v/t51.2885-19/s150x150/120818291_214751543336117_6925115707962237475_n.jpg?_nc_ht=instagram.fpfb5-1.fna.fbcdn.net&_nc_ohc=i89P2BTBzKMAX-Mdsrx&oh=93a01b2bd91a7102a2e4085418b67d8b&oe=5FC624E0";

const avatar3 =
  "https://instagram.fpfb5-1.fna.fbcdn.net/v/t51.2885-19/s150x150/116370411_739327373558477_5042923631981518076_n.jpg?_nc_ht=instagram.fpfb5-1.fna.fbcdn.net&_nc_ohc=HRf5FsPDH2sAX-1AcR_&oh=44af5c937ff33807439a80a64efc3bff&oe=5FC64CA2";

interface MainPubProps {
  className?: string;
}

const MainPublications: React.FC<MainPubProps> = () => {
  return (
    <Container>
      <ContainerMiddle1>
        <Swiper deviceType="desktop" />
      </ContainerMiddle1>

      <ContainerMiddle2>
        <Card
          avatar={avatar2}
          username="fakenewsdofutebol"
          numberoflikes={1547}
          publicationMessage="Otimo reforço para o barça"
          comment="Hahahahaha"
          img={img1}
          minutes={29}
        />
        <Card
          avatar={avatar3}
          username="sportv"
          numberoflikes={157744}
          publicationMessage="Quando a rodada começa é certo ter gol desses times, né?
          .
          .
          .
          #BrasileiraoNoSporTV #CampeonatoBrasileiro #Brasileirao #Flamengo #Pedro #BrunoHenrique #AtleticoMG #Keno #Sasha #Internacional #ThiagoGalhardo #AbelHernandez"
          comment="Hahahahaha"
          img={img2}
          minutes={57}
        />
        <Card
          avatar={avatar}
          username="__marcelo.silva__"
          numberoflikes={100}
          publicationMessage="Obrigado por assistir!"
          comment="Valeu :)"
          img={img3}
          minutes={1}
        />
      </ContainerMiddle2>
    </Container>
  );
};

export default MainPublications;
