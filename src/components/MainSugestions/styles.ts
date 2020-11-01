import styled from "styled-components";

export const Container = styled.div`
  padding-top: 0.7rem;
  width: 100%;
  background: #000;
  max-height: 100%;
  display: flex;

  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  background: #fafafa;

  div.divider {
    padding: 0.5rem 0 0.5rem 4rem;
    width: 100%;
    display: flex;

    justify-content: flex-start;
    font-size: 14px;

    label.a {
      color: #8e8e8e;
    }

    label.b {
      padding-left: 7rem;
    }
  }
`;
