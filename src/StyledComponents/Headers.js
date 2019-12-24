import styled, { css } from "styled-components";

export const MainHeader = styled.h1`
  text-align: center;
  margin: 2rem auto;
  font-weight: 400;
  font-size: 2.5rem;

  ${props =>
    props.activeReportHeader &&
    css`
      font-size: 1.9rem;

      @media (max-width: 550px) {
        font-size: 1.7rem;
      }

      @media (max-width: 400px) {
        font-size: 1.5rem;
      }
    `}

  ${props =>
    props.modalHeader &&
    css`
     font-size: 1.8rem;
             
      @media (max-width: 400px) {
        font-size: 1.5rem;
      }
   `}
`;
