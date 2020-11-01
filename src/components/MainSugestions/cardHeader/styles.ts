import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  background: #000;
  max-height: 100%;
  display: flex;

  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  background: #fafafa;

  div.header {
    display: flex;
    width: 100%;
    padding: 1rem 1rem 1rem 3rem;

    align-items: center;

    div.identification {
      padding-left: 0.7rem;
    }

    h5 {
      margin: 0;
      font-size: 14px;
    }

    h6 {
      margin: 0;
      color: #8e8e8e;
      font-size: 15px;
    }

    > img {
      width: 60px;
      border-radius: 50%;
      margin-right: 0.5rem;
      margin-left: 1rem;
    }

    div.change {
      width: 100%;
      flex: 1;

      padding-left: 4rem;
      h5 {
        color: #0095f6;
      }
    }
  }
`;
