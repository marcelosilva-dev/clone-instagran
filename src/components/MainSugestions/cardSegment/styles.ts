import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-height: 100%;
  display: flex;

  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  background: #fafafa;

  div.segment {
    display: flex;
    width: 100%;
    padding: 0.3rem 1rem 0.3rem 3rem;

    align-items: center;
    justify-content: space-between;

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
      width: 35px;
      border-radius: 50%;
      margin-right: 0.5rem;
      margin-left: 1rem;
    }

    div.change {
      width: 100%;
      flex: 1;
      text-align: right;
      h5 {
        color: #0095f6;
      }
    }
  }
`;
