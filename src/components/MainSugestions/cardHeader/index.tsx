import React from "react";

import { Container } from "./styles";

interface MainPubProps {
  className?: string;
  avatar: any;
  username: string;
  name: string;
}

const CardSegment: React.FC<MainPubProps> = (props: MainPubProps) => {
  return (
    <Container>
      <div className="header">
        <img src={props.avatar} />
        <div className="identification">
          <h5>{props.username}</h5>
          <h6>{props.name}</h6>
        </div>
        <div className="change">
          <h5>Mudar</h5>
        </div>
      </div>
    </Container>
  );
};

export default CardSegment;
