import React, { Component } from "react";

import Paper from "@material-ui/core/Paper";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import Toolbar from "@material-ui/core/Toolbar";

//import ForecastExtended from "./components/ForescastExtended";
import { Grid, Col, Row } from "react-flexbox-grid";
import LocationListContainer from "./containers/LocationListContainer";
import ForecasExtendedContainer from "./containers/ForecasExtendedContainer";

import "./App.css";

const cities = ["Barcelona,esp", "Madrid,esp", "Granollers,esp", "Granda,esp"];

class App extends Component {
  render() {
    // const { city } = this.state;
    return (
      <Grid>
        <Row>
          <AppBar postion="sticky">
            <Toolbar xs={12}>
              <Typography variant="h4" color="inherit">
                Weather App
              </Typography>
            </Toolbar>
          </AppBar>
        </Row>
        <Row style={{ marginTop: 56 }}>
          <Col xs={12} md={6}>
            <LocationListContainer cities={cities}> </LocationListContainer>
          </Col>

          <Col style={{ marginTop: 5 }} xs={12} md={6}>
            <Paper>
              <div className="details">
                <ForecasExtendedContainer></ForecasExtendedContainer>
              </div>
            </Paper>
          </Col>
        </Row>
      </Grid>
    );
  }
}
export default App;

//export default connect(null, mapDispacthToPropsActions)(App);
//export default AppConnected;
