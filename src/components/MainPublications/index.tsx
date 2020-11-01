import React from "react";

import { Container, ContainerMiddle1, ContainerMiddle2 } from "./styles";
import Card from "./cards";

const avatar =
  "https://instagram.fpfb5-1.fna.fbcdn.net/v/t51.2885-19/s150x150/66395784_439797356611676_4373976148577615872_n.jpg?_nc_ht=instagram.fpfb5-1.fna.fbcdn.net&_nc_ohc=1nzpcPeGo-8AX8aTNic&oh=e352fca2043c5a3c743b512ef4535bf7&oe=5FC66DF1";

interface MainPubProps {
  className?: string;
}

const MainPublications: React.FC<MainPubProps> = () => {
  return (
    <Container>
      <ContainerMiddle1>
        <div>
          <img src={avatar} />
          <label>Marcelo</label>
        </div>
        <div>
          <img src={avatar} />
          <label>Marcelo</label>
        </div>
        <div>
          <img src={avatar} />
          <label>Marcelo</label>
        </div>
        <div>
          <img src={avatar} />
          <label>Marcelo</label>
        </div>
        <div>
          <img src={avatar} />
          <label>Marcelo</label>
        </div>
        <div>
          <img src={avatar} />
          <label>Marcelo</label>
        </div>
        <div>
          <img src={avatar} />
          <label>Marcelo</label>
        </div>
      </ContainerMiddle1>

      <ContainerMiddle2>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </ContainerMiddle2>
    </Container>
  );
};

export default MainPublications;
