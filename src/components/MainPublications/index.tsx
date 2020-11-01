import React from "react";

import { Container, ContainerMiddle1, ContainerMiddle2 } from "./styles";
import Card from "./cards";
import Swiper from "../Swiper";

const avatar =
  "https://instagram.fpfb5-1.fna.fbcdn.net/v/t51.2885-19/s150x150/66395784_439797356611676_4373976148577615872_n.jpg?_nc_ht=instagram.fpfb5-1.fna.fbcdn.net&_nc_ohc=1nzpcPeGo-8AX8aTNic&oh=e352fca2043c5a3c743b512ef4535bf7&oe=5FC66DF1";

const img1 =
  "https://instagram.fpfb5-1.fna.fbcdn.net/v/t51.2885-15/e35/s1080x1080/122250613_382707909529473_3682243155951040763_n.jpg?_nc_ht=instagram.fpfb5-1.fna.fbcdn.net&_nc_cat=109&_nc_ohc=j2zD4LBMULcAX93w-8r&_nc_tp=15&oh=ea1db0a2c9fd5887e729c1481c9bc3db&oe=5FC6F7BD";

const img2 =
  "https://instagram.fpfb5-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/p750x750/123139232_1243604812691413_4488644467558489092_n.jpg?_nc_ht=instagram.fpfb5-1.fna.fbcdn.net&_nc_cat=1&_nc_ohc=tVSWxdKUkKgAX-6DIhA&_nc_tp=25&oh=1830fdd209073f41dce57626f0ce3add&oe=5FC92157";

const img3 = "https://i.ytimg.com/vi/-6Zdm90-xBA/maxresdefault.jpg";

const avatar2 =
  "https://instagram.fpfb5-1.fna.fbcdn.net/v/t51.2885-19/s150x150/14052563_1690640381258843_421044981_a.jpg?_nc_ht=instagram.fpfb5-1.fna.fbcdn.net&_nc_ohc=a4ifOUFDssoAX_prMH3&oh=ab0cf84eedff88ec04c9abd1744a2c96&oe=5FC96A87";

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
          username="motivacao24h"
          numberoflikes={1547}
          publicationMessage="#Repost @carolmeski
          ・・・
          Porque medo
          todo mundo sente,
          o que importa é como
          a gente lida com ele.
          
          Eu tenho medos, e você?
          
          #Motivacao24h via: @carolmeski
          "
          comment="Boa!"
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
