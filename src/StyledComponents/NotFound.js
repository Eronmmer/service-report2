import styled from "styled-components";

const NotFoundStyle = styled.div`
  display: flex;
  width: 100%;
  height: 85vh;
  overflow: hidden;
  justify-content: center;
  align-items: center;
  user-select: none;
  font-style: italic;
  position: relative;

  & .container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;

    @media screen and (max-width: 800px) {
      flex-direction: column;
    }

    @media screen and (max-width: 450px) {
      margin-bottom: 4rem;
    }
  }

  & .circle {
    width: 12.5rem;
    height: 12.5rem;
    border: 0.4375rem solid white;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 2rem;
    font-size: 7.5rem;
    padding: 1.8rem 1.3rem;
    font-weight: 500;
    position: relative;

    @media screen and (max-width: 850px) {
      margin: 0 1.4rem;
    }

    @media screen and (max-width: 800px) {
      margin-top: 3rem;
      margin-bottom: 3rem;
    }

    @media screen and (max-width: 800px) {
      margin-top: 2rem;
      margin-bottom: 2rem;
    }

    @media screen and (max-width: 350px) {
      & {
        width: 8.5rem;
        height: 8.5rem;
        font-size: 5rem;
        /* padding: 1.8rem 1.3rem 1rem 1.3rem; */
      }
    }

    &::before {
      content: "";
      height: 9.375rem;
      width: 0.4375rem;
      top: 4.3125rem;
      left: 2.375rem;
      position: absolute;
      transform: rotate(130deg);
      background: #1e2227;
    }

    &::after {
      content: "";
      height: 11.25rem;
      width: 0.4375rem;
      top: 2.8125rem;
      right: 4.25rem;
      position: absolute;
      transform: rotate(130deg);
      background: #1e2227;
    }

    & .not {
      position: relative;

      &::after {
        font-size: 2.7rem;
        font-family: "Press Start 2P", cursive;
        content: "not";
        position: absolute;
        bottom: 3.4375rem;
        left: -10.625rem;

        @media screen and (max-width: 350px) {
          font-size: 2.1rem;
          bottom: 2.4375rem;
          left: -7.625rem;
          bottom: 1rem;
        }
      }
    }
  }

  & .error,
  & .found {
    font-size: 2.5rem;
    font-family: "Press Start 2P", cursive;

    @media screen and (max-width: 350px) {
      & {
        font-size: 1.8rem;
      }
    }
  }

  .homePage {
    position: absolute;
    bottom: 0;
    font-style: normal;
    transition: all 0.5s ease-in;

    &:hover {
      transform: scale(1.05);
    }

    & a {
      color: white;
      text-decoration: none;
      border: 2px solid white;
      padding: 0.7rem 1.4rem;
      border-radius: 0.8rem;
      font-weight: 500;
    }
  }
`;

export default NotFoundStyle;
