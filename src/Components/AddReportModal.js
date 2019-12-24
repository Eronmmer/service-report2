import React, {useContext} from "react";
import { ReportModal } from "../StyledComponents/Modals";
import { Button } from "../StyledComponents/Buttons";
import { MainHeader } from "../StyledComponents/Headers";
import AppContext from '../Context/AppContext'

const AddReportModal = () => {
  const appContext = useContext( AppContext );
  const { toggleReportModal, changeReport, reportModal: {hours, placements, videos, returnVisits}, submitReport } = appContext;
  return (
    <ReportModal>
      <div className="modalFlex">
        <div className="modalContent">
          <MainHeader modalHeader as="h2">
            Add Some record{" "}
            <span role="img" aria-label="blush emoji">
              😊
            </span>
          </MainHeader>

          <form onSubmit={(e) => submitReport(e)}>
            <div className="date modalFlexInput">
              <p>Date: </p>{" "}
              <input
                type="date"
                name="modalDate"
                id="modalDate"
                className="secondChildModal"
                required
              />
            </div>
            <div className="hours modalFlexInput">
              <p>Hours: </p>{" "}
              <input
                className="secondChildModal"
                type="number"
                name="modalHours"
                id="modalHours"
                min="0"
                required
                onChange={(e) => changeReport(e.target.value, "CHANGE_HOURS")}
                value={hours}
              />
            </div>
            <div className="placements modalFlexInput">
              <p>Placements: </p>{" "}
              <input
                className="secondChildModal"
                type="number"
                name="modalPlacements"
                id="modalPlacements"
                min="0"
                required
                onChange={( e ) => changeReport( e.target.value, "CHANGE_PLACEMENTS" )}
                value={placements}
              />
            </div>
            <div className="videos modalFlexInput">
              <p>Videos: </p>{" "}
              <input
                className="secondChildModal"
                type="number"
                name="modalVideos"
                id="modalVideos"
                min="0"
                required
                onChange={( e ) => changeReport( e.target.value, "CHANGE_VIDEOS" )}
                value={videos}
              />
            </div>
            <div className="returnVisits modalFlexInput">
              <p>Return Visits: </p>{" "}
              <input
                className="secondChildModal"
                type="number"
                name="modalReturnVisits"
                id="modalReturnVisits"
                min="0"
                required
                onChange={( e ) => changeReport( e.target.value, "CHANGE_RETURN_VISITS" )}
                value={returnVisits}
              />
            </div>
            <Button type="submit" submitButton>
              Submit
            </Button>
          </form>
          <Button onClick={toggleReportModal} closeButton>Close</Button>
        </div>
      </div>
    </ReportModal>
  );
};

export default AddReportModal;
