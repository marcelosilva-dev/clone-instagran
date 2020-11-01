import styled from "styled-components";
import { shade } from "polished";

export const Container = styled.div`
  width: 100vw;
  height: 50px;
  background: #ffffff;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  transition-timing-function: ease-in;
  transition: all 1s;
  font-size: 14px;
  padding: 0.2rem 0 0 0;

  border-bottom: 1px solid #dbdbdb;

  nav {
    width: 50%;
    display: flex;

    justify-content: space-between;
    align-items: center;

    div.input {
      width: 22%;
      display: flex;

      div.input-container {
        width: 100%;
        padding: 0.2rem 0 0.2rem 0;

        display: flex;
        width: 100%;
        flex: 1;
        border: 1px solid #dbdbdb;
        background: #fafafa;
        justify-content: center;
        align-items: center;
        border-radius: 2px;

        label {
          color: #8e8e8e;
        }
      }
    }

    div.icons {
      display: flex;

      svg {
        padding: 0 0.7rem 0 0.7rem;
      }
      img {
        width: 25px;
        background-color: #000;
        border-radius: 50%;
        margin-left: 0.5rem;
      }
    }
  }
`;
