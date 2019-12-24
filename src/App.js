import React from "react";
import Header from "./Components/MainHeader";
import AppState from "./Context/AppState";
import ReportBody from "./Components/ReportBody";
import { Container } from "./StyledComponents/Container";
import Modals from "./Components/Modals";


const App = () => {
  return (
    <AppState>
      <Container>
        <Header />
        <ReportBody />
        <Modals />
      </Container>
    </AppState>
  );
};

export default App;
