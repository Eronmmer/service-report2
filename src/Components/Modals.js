import React, { useContext } from "react";
import AddMonthModal from "./AddMonthModal";
import AddReportModal from "./AddReportModal";
import AppContext from "../Context/AppContext";

const Modals = () => {
  const appContext = useContext(AppContext);
  const { monthModalOpen, reportModalOpen } = appContext;
  if (monthModalOpen) {
    return <AddMonthModal />;
  } else if (reportModalOpen) {
    return <AddReportModal />;
  } else return null;
};

export default Modals;
