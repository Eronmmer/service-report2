import React, {useContext} from "react";
import { ReportBody } from "../StyledComponents/ReportBody";
import { Button } from '../StyledComponents/Buttons'
import AppContext from '../Context/AppContext'

const NewUser = () => {
  const appContext = useContext( AppContext )
  const { toggleMonthModal } = appContext;
  return (
    <ReportBody newUser>
      <p>
        Hey!
        <span role="img" aria-label="hands up emoji">
          🙋
        </span>{" "}
        It seems you're not keeping record of your report presently
        <span role="img" aria-label="don't know emoji">
          🤷
        </span> {" "}
        Click on the "Add new month" button below to begin
        <span role="img" aria-label="grin emoji">
          😁
        </span>{" "}
      </p>
      <Button onClick={toggleMonthModal} newUserButton>Add new month</Button>
    </ReportBody>
  );
};

export default NewUser;
