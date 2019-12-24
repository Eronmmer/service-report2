import styled, { css, keyframes } from "styled-components";

const swing = keyframes`
15% {
      transform: translateX(5px);
    }

    30% {
      transform: translateX(-5px);
    }

    50% {
      transform: translateX(3px);
    }

    65% {
      transform: translateX(-3px);
    }

    80% {
      transform: translateX(2px);
    }

    100% {
      transform: translateX(0);
    }
`;

// work on the hover state of these buttons later
export const Button = styled.button`
  border-radius: 6px;
  padding: 0.5rem 3rem;
  font-family: inherit;
  font-size: 1.1rem;
  
  /* background: red; */
  cursor: pointer;
  color: white;
  border: none;
  text-align: center;
  display: block;
  margin-left: auto;
  margin-right: auto;

  ${props =>
    props.newUserButton &&
    css`
      background: #dc3545;
      animation: ${swing} 2s ease;
      animation-iteration-count: infinite;
      backface-visibility: hidden;
      margin-top: 1.5rem;
      margin-bottom: 1rem;

      &:hover {
        animation: none;
      }
    `}

  ${props =>
    props.activeUserAddMonthButton &&
    css`
      background: #dc3545;
      margin-top: 2.8rem;
      margin-bottom: 1rem;

      &:hover {
        background: lighten(#dc3545, 5%);
      }
    `}

  ${props =>
    props.activeUserAddReportButton &&
    css`
      background: #138496;
      margin-top: 0.6rem;
      margin-bottom: 2rem;

      &:hover {
        background: lighten(#138496, 15%);
      }
    `}

  ${props =>
    props.submitButton &&
    css`
      background: #0069d9;
      margin: 1rem auto;
      padding: 0.5rem 1.4rem;
      transition: all 0.5s ease;
      

      &:hover {
        opacity: 0.9;
        transform: scale(1.01);
      }
    `}

  ${props =>
    props.closeButton &&
    css`
      background: #dc3545;
      margin: 1.3rem 0 0 auto;
      padding: 0.5rem 1rem;
      transition: all 0.5s ease;

      &:hover {
        opacity: 0.9;
        transform: scale(1.01);
      }
    `}

`;
