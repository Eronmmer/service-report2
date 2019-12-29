import React from "react";
import Header from "./Components/MainHeader";
import AppState from "./Context/AppState";
import ReportBody from "./Components/ReportBody";
import { Container } from "./StyledComponents/Container";
import Modals from "./Components/Modals";
import About from './Components/About'
import NotFound from './Components/NotFound'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <AppState>
      <Router>
        <Container>
          <Switch>
            <Route
              exact
              path="/"
              render={props => (
                <>
                  <Header />
                  <ReportBody />
                </>
              )}
            />
            <Route exact path="/about" component={About} />
            <Route component={NotFound} />
          </Switch>
          <Modals />
        </Container>
      </Router>
    </AppState>
  );
};

export default App;
