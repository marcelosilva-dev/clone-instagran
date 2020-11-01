import React from "react";

import { Container } from "./styles";

import CardHeader from "./cardHeader";
import CardSegment from "./cardSegment";

const avatar =
  "https://instagram.fpfb5-1.fna.fbcdn.net/v/t51.2885-19/s150x150/66395784_439797356611676_4373976148577615872_n.jpg?_nc_ht=instagram.fpfb5-1.fna.fbcdn.net&_nc_ohc=1nzpcPeGo-8AX8aTNic&oh=e352fca2043c5a3c743b512ef4535bf7&oe=5FC66DF1";

const avatar2 =
  "https://instagram.fpfb5-1.fna.fbcdn.net/v/t51.2885-19/s150x150/109302063_3045932892161451_3678211307606053761_n.jpg?_nc_ht=instagram.fpfb5-1.fna.fbcdn.net&_nc_ohc=4_FQQBTGtO8AX9Lf9ce&oh=8cbc121bf35b824c7424ee9c675bf8d4&oe=5FC87939";

const avatar3 =
  "https://instagram.fpfb5-1.fna.fbcdn.net/v/t51.2885-19/s150x150/120249574_696234617645569_82234386990799754_n.jpg?_nc_ht=instagram.fpfb5-1.fna.fbcdn.net&_nc_ohc=ErH9ijE3p3sAX-k6aMF&oh=61e767bd641a169db89933478cb83746&oe=5FC845AC";

const avatar4 =
  "https://instagram.fpfb5-1.fna.fbcdn.net/v/t51.2885-19/s150x150/43469340_724607571216794_6212419767005872128_n.jpg?_nc_ht=instagram.fpfb5-1.fna.fbcdn.net&_nc_ohc=2M9x9f7g2yEAX8RoD1k&oh=a560f84e269b6070e035fb255469f043&oe=5FC9144C";

const avatar5 =
  "https://instagram.fpfb5-1.fna.fbcdn.net/v/t51.2885-19/s150x150/15258928_266539020427364_2806485051733180416_a.jpg?_nc_ht=instagram.fpfb5-1.fna.fbcdn.net&_nc_ohc=uONaBlR9O90AX-qkrLA&oh=3add29999f844dc7ba2ba4607adf187b&oe=5FC7E172";

const avatar6 =
  "https://instagram.fpfb5-1.fna.fbcdn.net/v/t51.2885-19/s150x150/82296477_171877317560658_7885650888503590912_n.jpg?_nc_ht=instagram.fpfb5-1.fna.fbcdn.net&_nc_ohc=j0jadoKd66sAX_PVFzo&oh=8a84e6e42e81a1f0fac333d81032e516&oe=5FCA4A54";
const avatar7 =
  "https://instagram.fpfb5-1.fna.fbcdn.net/v/t51.2885-19/s150x150/71695060_378765166393211_4908362907328184320_n.jpg?_nc_ht=instagram.fpfb5-1.fna.fbcdn.net&_nc_ohc=Gd7G2EqooZ0AX-QQL9L&oh=4ac80ec95a4bf6f53a43427c6e32cdc8&oe=5FC81796";
interface MainPubProps {
  className?: string;
}

const MainPublications: React.FC<MainPubProps> = () => {
  return (
    <Container>
      <CardHeader avatar={avatar} username="__marcelo.silva__" name="Marcelo" />
      <div className="divider">
        <label className="a">Sugestões para você</label>
        <label className="b">Ver tudo</label>
      </div>
      <CardSegment
        avatar={avatar2}
        username="acnurbrasil"
        name="ACNUR Brasil"
      />
      <CardSegment
        avatar={avatar3}
        username="adoteajudeanimaispanambi"
        name="Adote/Ajude animais Panambi"
      />
      <CardSegment
        avatar={avatar4}
        username="ongamarpanambirs"
        name="ONG Amigos dos Animais de Rua"
      />
      <CardSegment
        avatar={avatar5}
        username="cruzvermelhabrasileira"
        name="Cruz Vermelha Brasileira"
      />
      <CardSegment
        avatar={avatar6}
        username="exercito_oficial"
        name="Exército Brasileiro"
      />
      <CardSegment
        avatar={avatar7}
        username="packers"
        name="Green Bay Packers"
      />
    </Container>
  );
};

export default MainPublications;
