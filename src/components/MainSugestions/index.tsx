import React from "react";

import { Container } from "./styles";

interface MainPubProps {
  className?: string;
}

const MainPublications: React.FC<MainPubProps> = () => {
  return (
    <Container>
      <h3>Sugestões</h3>
    </Container>
  );
};

export default MainPublications;
