import styled, { css } from "styled-components";

export const ReportBody = styled.div`
  background: #343a40;
  padding: 1.5rem 2rem;
  border-radius: 8px;
  max-width: 800px;
  margin: 0 auto;

  @media (max-width: 650px) {
    padding: 1.5rem;
  }

  & p {
    font-size: 1.2rem;
  }

  ${props =>
    props.newUser &&
    css`
      text-align: center;
    `}
`;

export const ReportContainer = styled.div`
  font-size: 1.2rem;
  margin: 0 auto;
  max-width: 500px;
`;

export const ReportRow = styled.div`
  margin-bottom: 0.7rem;
  display: flex;
  justify-content: space-between;

  & div:nth-child(2) {
    margin-right: 3rem;
    color: #7afd10;
  }
`;
