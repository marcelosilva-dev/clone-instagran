import React from "react";

import { Container, ContainerMain } from "./styles";
import Header from "./components/Header";
import MainPublications from "./components/MainPublications";
import MainSugestions from "./components/MainSugestions";

function App() {
  return (
    <Container>
      <div className="header">
        <Header />
      </div>
      <div className="main">
        <ContainerMain>
          <MainPublications />
          <MainSugestions />
        </ContainerMain>
      </div>
    </Container>
  );
}

export default App;
