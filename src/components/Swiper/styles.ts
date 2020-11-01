import styled from "styled-components";

export const Container = styled.div`
  max-width: 600px;
  height: 100%;

  img {
    width: 100px;
    border: 2px solid #e1306c;
    border-radius: 50%;
    margin-left: 0.5rem;
    padding: 0.1rem !important;
    background-color: #ffffff;
    flex: 1 1;
  }

  #__next {
    padding: 1rem;
  }
  .image-item {
    padding: 0 !important;
  }

  section {
    margin: 0 !important;
    padding: 1rem !important;
  }

  .react-multiple-carousel__arrow {
    position: absolute;
    outline: 0;
    transition: all 0.5s;
    border-radius: 35px;
    z-index: 1000;
    border: 0;
    background: rgba(0, 0, 0, 0.5);
    min-width: 43px;
    min-height: 43px;
    opacity: 1;
    cursor: pointer;
    margin-top: 14px;
  }

  .react-multi-carousel-list {
    height: 100%;
    display: flex !important;
    max-width: 100% !important;
    align-items: center !important;
    margin: 0 !important;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;

    height: 20px;
  }

  ul {
    max-width: 100%;
  }

  li {
    display: flex;
    flex-direction: column;
    width: 60px !important;
    max-height: 300px !important;
    padding: 0 1rem 0 1rem !important;
    justify-content: center;
    align-items: flex-start;
    flex: 1 1;
  }

  li {
    margin: 0 1rem !important;
  }

  h6 {
    margin: 0 !important;
    overflow: hidden !important;
  }
`;
