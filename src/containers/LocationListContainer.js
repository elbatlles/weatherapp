import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { setSelectedCity } from "./../actions";
import LocationList from "./../components/WeatherLocation/LocationList";
class LocationListContainer extends Component {
  handleSelectedLocation = city => {
    console.log(` estamos en APP ${city}`);
    this.props.setCity(city);
    //  store.dispatch(setCity(city));
  };

  render() {
    return (
      <LocationList
        onSelectLocation={this.handleSelectedLocation}
        cities={this.props.cities}
      ></LocationList>
    );
  }
}

LocationListContainer.propTypes = {
  setCity: PropTypes.func.isRequired,
  cities: PropTypes.array.isRequired
};
const mapDispacthToPropsActions = dispatch => ({
  setCity: value => dispatch(setSelectedCity(value))
});

export default connect(null, mapDispacthToPropsActions)(LocationListContainer);
