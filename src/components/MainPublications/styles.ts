import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;

  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  background: #fafafa;
`;

export const ContainerMiddle1 = styled.div`
  max-width: 100%;
  height: 100%;

  display: flex;

  flex-direction: row;
  justify-content: center;
  align-items: center;
  background: #ffffff;
  border: 1px solid #dbdbdb;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
export const ContainerMiddle2 = styled.div`
  margin-top: 20px;
  width: 100%;
  max-height: 100%;

  display: flex;

  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #fafafa;
`;
