import React, { useReducer} from "react";
import AppContext from "./AppContext";
import AppReducer from "./AppReducer";
import {
  SUBMIT_NEW_MONTH,
  SUBMIT_NEW_REPORT,
  TOGGLE_MONTH_MODAL,
  TOGGLE_REPORT_MODAL,
  CHANGE_MONTH,
  CHANGE_YEAR
} from "./Types";

const AppState = props => {
  const serviceReport = JSON.parse(localStorage.getItem("serviceReport"));

  let initialState = {
    activeUser: localStorage.getItem("serviceReport") !== null,
    month: null,
    year: null,
    hours: 0,
    placements: 0,
    videos: 0,
    returnVisits: 0,
    monthModalOpen: false,
    reportModalOpen: false,
    monthModal: { month: null, year: null },
    reportModal: {
      hours: null,
      placements: null,
      videos: null,
      returnVisits: null
    }
  };

  if (serviceReport !== null) {
    initialState = {
      ...initialState,
      month: serviceReport.month,
      year: serviceReport.year,
      hours: serviceReport.hours,
      placements: serviceReport.placements,
      videos: serviceReport.videos,
      returnVisits: serviceReport.returnVisits
    };
  }

  const [state, dispatch] = useReducer(AppReducer, initialState);

  const toggleMonthModal = () => {
    dispatch({
      type: TOGGLE_MONTH_MODAL
    });
  };

  const toggleReportModal = () => {
    dispatch({
      type: TOGGLE_REPORT_MODAL
    });
  };

  const changeMonth = month => {
    dispatch({
      type: CHANGE_MONTH,
      payload: month
    });
  };

  const changeYear = year => {
    dispatch({
      type: CHANGE_YEAR,
      payload: year
    });
  };

  const changeReport = (report, type) => {
    dispatch({
      type: type,
      payload: report
    });
  };

  const submitNewMonth = e => {
    e.preventDefault();
    dispatch({
      type: SUBMIT_NEW_MONTH
    });
    toggleMonthModal();
  };

  const submitReport = e => {
    e.preventDefault();
    dispatch({
      type: SUBMIT_NEW_REPORT
    });
    toggleReportModal();
  };

  return (
    <AppContext.Provider
      value={{
        activeUser: state.activeUser,
        month: state.month,
        year: state.year,
        hours: state.hours,
        placements: state.placements,
        videos: state.videos,
        returnVisits: state.returnVisits,
        monthModalOpen: state.monthModalOpen,
        reportModalOpen: state.reportModalOpen,
        monthModal: state.monthModal,
        reportModal: state.reportModal,
        toggleMonthModal,
        toggleReportModal,
        changeMonth,
        changeYear,
        submitNewMonth,
        submitReport,
        changeReport
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppState;
