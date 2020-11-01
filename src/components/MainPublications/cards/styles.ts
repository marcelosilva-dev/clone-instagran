import styled from "styled-components";

export const Header = styled.div`
  width: 100%;
  max-height: 100%;
  display: flex;
  flex: 1;

  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  background: #ffffff;

  border: 1px solid #dbdbdb;

  > div {
    display: flex;
    width: 100%;
    padding: 1rem 0 1rem 0;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    div {
      display: flex;
      height: 40px;
      align-items: center;

      > img {
        width: 40px;
        background-color: #000;
        border-radius: 50%;
        margin-right: 0.5rem;
        margin-left: 1rem;
      }

      > h5 {
        padding: 0;
        margin: 0;
      }
    }

    > svg {
      margin-right: 15px;
    }
  }
`;

export const Footer = styled.div`
  width: 100%;
  height: 100%;
  background: #ffffff;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border: 1px solid #dbdbdb;

  margin-bottom: 20px;

  div.icons {
    padding: 1rem;
  }

  div.like {
    display: flex;
    padding: 0.5rem 0;
    > img {
      width: 20px;
      background-color: #000;
      border-radius: 50%;
      margin-right: 0.5rem;
      margin-left: 1rem;
    }
    label {
      h5 {
        white-space: nowrap;
      }
    }
  }

  div.post {
    padding: 0.2rem 1rem;
  }

  div.comment {
    padding: 0.2rem 1rem 1rem 1rem;
  }

  div.time {
    width: 100%;
    font-size: 10px;
    color: #00376b;
    border-bottom: 1px solid #dbdbdb;
    padding: 0.5rem 0;

    label {
      padding-left: 1rem;
    }
  }

  div.newComment {
    display: flex;
    width: 100%;

    input {
      width: 100%;
      border: 0;
      background: transparent;

      &:focus {
        border: 0;
      }

      &::placeholder {
        padding-left: 1rem;
      }
    }

    button {
      width: 15%;
      padding: 1rem 0 1rem 0;
      background: #ffffff;
      border: none;
      font-weight: bold;

      color: #0095f6;
    }
  }

  svg {
    padding: 0 0.7rem 0 0;
  }
`;
