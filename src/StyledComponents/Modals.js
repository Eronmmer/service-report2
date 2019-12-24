import styled from "styled-components";

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 500;
  height: 100%;
  width: 100%;
  /* opacity: .1; */
  /* background: radial-gradient(black, transparent); */
  background: #000000a1;
  font-size: 1.2rem;
  overflow-x: hidden;
  overflow-y: auto;

  & .modalFlex {
    display: flex;
    justify-content: center;
    width: 100%;
    /* position: relative; */
    align-items: center;
    /* height: 60%; */
    margin-top: 10%;
    padding-bottom: 2rem;
  }

  & .modalContent {
    background: white;
    color: #333;
    max-width: 500px;
    border-radius: 5px;
    padding: 0 3rem 2rem 2.3rem;
    width: 100%;
    position: relative;

    @media (max-width: 650px) {
      max-width: 300px;
      padding: 0 2rem 1rem 2rem;
      width: 75%;
    }

    @media screen and (max-width: 370px) {
      & div:not(:last-of-type) {
        margin-bottom: 0.6rem;
      }
    }
  }

  & .modalContent .modalFlexInput {
    display: flex;
    justify-content: space-between;
    /* align-content: center; */
    align-items: center;

    .secondChildModal {
      flex: 0 1 60%;
      padding: 0.5rem 1rem;
      border-radius: 4px;
      border: 1px solid #a5a5a5;
      font-family: inherit;

      @media screen and (max-width: 370px) {
        width: 90%;
      }
    }

    select.secondChildModal {
      flex-basis: calc(60% + 2rem);

      @media screen and (max-width: 370px) {
        width: calc(90% + 2rem);
      }
    }

    & p:first-of-type {
      margin-right: 0.4rem;

      @media screen and (max-width: 370px) {
        margin-bottom: 0.5rem;
      }
    }

    @media screen and (max-width: 370px) {
      flex-direction: column;
      align-items: flex-start;
    }
  }
  & form:after {
    left: 0;
    position: absolute;
    content: "";
    height: 1px;
    width: 100%;
    background: #b2b2b2f5;
  }
`;

export const MonthModal = styled(Modal)``;

export const ReportModal = styled(Modal)``;
