import React, { Component } from "react";
import PropTypes from "prop-types";
import ForecastExtended from "../components/ForescastExtended";
import { connect } from "react-redux";

class ForecasExtendedContainer extends Component {
  render() {
    return <ForecastExtended city={this.props.city} />;
  }
}

ForecasExtendedContainer.propTypes = {
  city: PropTypes.string.isRequired
};
//const mapStateToProps = ({ city }) => ({ city });
const mapStateToProps = state => {
  console.log(state);
  return { city: state.city };
};
export default connect(mapStateToProps, null)(ForecasExtendedContainer);
