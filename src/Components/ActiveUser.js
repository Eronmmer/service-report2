import React, { useContext } from "react";
import { ReportBody } from "../StyledComponents/ReportBody";
import AppContext from "../Context/AppContext";
import { Button } from "../StyledComponents/Buttons";
import { MainHeader } from "../StyledComponents/Headers";
import { ReportContainer } from "../StyledComponents/ReportBody";
import { ReportRow } from "../StyledComponents/ReportBody";

const ActiveUser = () => {
  const appContext = useContext(AppContext);
  const { toggleMonthModal, toggleReportModal } = appContext;

  const { month, year, hours, videos, placements, returnVisits } = JSON.parse(
    localStorage.getItem("serviceReport")
  );

  return (
    <ReportBody activeUser>
      <Button onClick={toggleReportModal} activeUserAddReportButton>
        Add Report
      </Button>
      <MainHeader activeReportHeader>
        Current Cumulative Report for {month} {year}
      </MainHeader>
      <ReportContainer>
        <ReportRow>
          <div>Hours:</div>
          <div>{hours}</div>
        </ReportRow>
        <ReportRow>
          <div>Placements:</div>
          <div>{placements}</div>
        </ReportRow>
        <ReportRow>
          <div>Videos:</div>
          <div>{videos}</div>
        </ReportRow>
        <ReportRow>
          <div>Return Visits:</div>
          <div>{returnVisits}</div>
        </ReportRow>
      </ReportContainer>
      <Button onClick={toggleMonthModal} activeUserAddMonthButton>
        Add new Month
      </Button>
    </ReportBody>
  );
};

export default ActiveUser;
