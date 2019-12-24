import React, { useContext, useEffect, useRef } from "react";
import { MonthModal } from "../StyledComponents/Modals";
import { Button } from "../StyledComponents/Buttons";
import { MainHeader } from "../StyledComponents/Headers";
import AppContext from "../Context/AppContext";

const AddMonthModal = () => {
  const modalContent = useRef(null);

  const appContext = useContext(AppContext);
  const {
    toggleMonthModal,
    changeMonth,
    changeYear,
    monthModal,
    submitNewMonth,
    monthModalOpen
  } = appContext;

  useEffect(() => {
    window.addEventListener("click", e => {
      if (modalContent.current === null) return;
      if (monthModalOpen && !modalContent.current.contains(e.target)) {
        toggleMonthModal();
      }
    });
  }, [monthModalOpen, modalContent, toggleMonthModal]);

  return (
    <MonthModal>
      <div className="modalFlex">
        <div ref={modalContent} className="modalContent">
          <MainHeader modalHeader as="h2">
            {" "}
            Start recording for a new month!
          </MainHeader>
          <form onSubmit={e => submitNewMonth(e)}>
            <div className="month modalFlexInput">
              <p>Month: </p>{" "}
              <select
                className="secondChildModal"
                name="modalMonth"
                id="modalMonth"
                required
                value={monthModal.month}
                onBlur={e => changeMonth(e.target.value)}
              >
                <option value="">--Please pick a Month--</option>
                <option value="January">January</option>
                <option value="February">February</option>
                <option value="March">March</option>
                <option value="April">April</option>
                <option value="May">May</option>
                <option value="June">June</option>
                <option value="July">July</option>
                <option value="August">August</option>
                <option value="September">September</option>
                <option value="October">October</option>
                <option value="November">November</option>
                <option value="December">December</option>
              </select>
            </div>
            <div className="year modalFlexInput">
              <p>Year: </p>{" "}
              <input
                className="secondChildModal"
                type="number"
                name="modalYear"
                id="modalYear"
                min="1914"
                max="3020"
                required
                value={monthModal.year}
                onChange={e => changeYear(e.target.value)}
              />
            </div>
            <Button type="submit" submitButton>
              Start recording
            </Button>
          </form>
          <Button onClick={toggleMonthModal} closeButton>
            Close
          </Button>
        </div>
      </div>
    </MonthModal>
  );
};

export default AddMonthModal;
