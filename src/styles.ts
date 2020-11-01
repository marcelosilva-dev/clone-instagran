import styled from "styled-components";

export const Container = styled.div`
  max-height: 100vh;
  width: 100%;
  display: grid;
  grid-template:
    "header" 10%
    "main" 1fr
    / 50%;

  .header {
    grid-area: header;
  }

  .main {
    grid-area: main;
  }

  justify-content: center;
  align-items: flex-start;
`;

export const ContainerMain = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  background: #fafafa;

  justify-content: center;
  align-items: flex-start;
`;
