import React from "react";

import { Container } from "./styles";

import CardHeader from "./cardHeader";
import CardSegment from "./cardSegment";

const avatar =
  "https://instagram.fpfb5-1.fna.fbcdn.net/v/t51.2885-19/s150x150/66395784_439797356611676_4373976148577615872_n.jpg?_nc_ht=instagram.fpfb5-1.fna.fbcdn.net&_nc_ohc=1nzpcPeGo-8AX8aTNic&oh=e352fca2043c5a3c743b512ef4535bf7&oe=5FC66DF1";

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
        avatar={avatar}
        username="__marcelo.silva__"
        name="Marcelo"
      />
      <CardSegment
        avatar={avatar}
        username="__marcelo.silva__"
        name="Marcelo"
      />
      <CardSegment
        avatar={avatar}
        username="__marcelo.silva__"
        name="Marcelo"
      />
      <CardSegment
        avatar={avatar}
        username="__marcelo.silva__"
        name="Marcelo"
      />
      <CardSegment
        avatar={avatar}
        username="__marcelo.silva__"
        name="Marcelo"
      />
      <CardSegment
        avatar={avatar}
        username="__marcelo.silva__"
        name="Marcelo"
      />
    </Container>
  );
};

export default MainPublications;
