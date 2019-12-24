import {
  SUBMIT_NEW_MONTH,
  SUBMIT_NEW_REPORT,
  TOGGLE_MONTH_MODAL,
  TOGGLE_REPORT_MODAL,
  CHANGE_MONTH,
  CHANGE_YEAR,
  CHANGE_HOURS,
  CHANGE_PLACEMENTS,
  CHANGE_RETURN_VISITS,
  CHANGE_VIDEOS
} from "./Types";

export default (state, action) => {
  switch (action.type) {
    case TOGGLE_MONTH_MODAL:
      return {
        ...state,
        monthModalOpen: !state.monthModalOpen
      };
    case TOGGLE_REPORT_MODAL:
      return {
        ...state,
        reportModalOpen: !state.reportModalOpen
      };
    case CHANGE_MONTH:
      return {
        ...state,
        monthModal: { ...state.monthModal, month: action.payload }
      };
    case CHANGE_YEAR:
      return {
        ...state,
        monthModal: { ...state.monthModal, year: parseInt(action.payload) }
      };
    case CHANGE_HOURS:
      return {
        ...state,
        reportModal: { ...state.reportModal, hours: action.payload }
      };
    case CHANGE_PLACEMENTS:
      return {
        ...state,
        reportModal: { ...state.reportModal, placements: action.payload }
      };
    case CHANGE_VIDEOS:
      return {
        ...state,
        reportModal: { ...state.reportModal, videos: action.payload }
      };
    case CHANGE_RETURN_VISITS:
      return {
        ...state,
        reportModal: { ...state.reportModal, returnVisits: action.payload }
      };
    case SUBMIT_NEW_MONTH:
      if (
        state.month !== state.monthModal.month ||
        state.year !== state.monthModal.year
      ) {
        localStorage.setItem(
          "serviceReport",
          JSON.stringify({
            hours: 0,
            placements: 0,
            videos: 0,
            returnVisits: 0,
            month: state.monthModal.month,
            year: state.monthModal.year
          })
        );
        return {
          ...state,
          reportModal: {
            hours: null,
            placements: null,
            returnVisits: null,
            videos: null
          },
          hours: 0,
          placements: 0,
          videos: 0,
          returnVisits: 0,
          month: state.monthModal.month,
          year: state.monthModal.year,

          activeUser: true
        };
      }
      // const serviceReport = JSON.parse(localStorage.getItem("serviceReport"));
      // serviceReport.month = state.monthModal.month;
      // serviceReport.year = state.monthModal.year;
      // localStorage.setItem( "serviceReport", JSON.stringify( serviceReport ) );
      localStorage.setItem(
        "serviceReport",
        JSON.stringify({
          ...JSON.parse(localStorage.getItem("serviceReport")),
          month: state.monthModal.month,
          year: state.monthModal.year
        })
      );
      return {
        ...state,
        month: state.monthModal.month,
        year: state.monthModal.year,

        activeUser: true
      };

    case SUBMIT_NEW_REPORT:
      localStorage.setItem(
        "serviceReport",
        JSON.stringify({
          ...JSON.parse(localStorage.getItem("serviceReport")),
          hours: state.hours + parseFloat(state.reportModal.hours),
          placements:
            state.placements + parseFloat(state.reportModal.placements),
          videos: state.videos + parseFloat(state.reportModal.videos),
          returnVisits:
            state.returnVisits + parseFloat(state.reportModal.returnVisits)
          // month: state.monthModal.month,
          // year: state.monthModal.year
        })
      );
      return {
        ...state,
        hours: state.hours + parseFloat(state.reportModal.hours),
        placements: state.placements + parseFloat(state.reportModal.placements),
        videos: state.videos + parseFloat(state.reportModal.videos),
        returnVisits:
          state.returnVisits + parseFloat(state.reportModal.returnVisits)
      };
    default:
      return state;
  }
};
