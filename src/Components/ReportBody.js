import React, { useContext} from "react";
import AppContext from "../Context/AppContext";
import ActiveUser from "./ActiveUser";
import NewUser from "./NewUser";

const ReportBody = () => {
  const appContext = useContext(AppContext);
  const { activeUser } = appContext;
  
  if (activeUser) {
    return <ActiveUser />;
  } else {
    return <NewUser />;
  }
};

export default ReportBody;
