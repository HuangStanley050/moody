import React, { Component } from "react";
import DatePicker from "react-datepicker";
import { connect } from "react-redux";
import { get_moods } from "../store/actions/moodActions";
import "react-datepicker/dist/react-datepicker.css";

const formatTime = today => {
  let dd = today.getDate();
  let mm = today.getMonth() + 1; //January is 0!

  let yyyy = today.getFullYear();
  if (dd < 10) {
    dd = "0" + dd;
  }
  if (mm < 10) {
    mm = "0" + mm;
  }
  today = dd + "/" + mm + "/" + yyyy;

  return today;
};

class Calender extends Component {
  state = {
    startDate: new Date()
  };

  handleChange = date => {
    this.setState({
      startDate: date
    });
  };

  handleSelect = date => {
    const timeString = formatTime(date);
    this.props.getMoods(timeString);
    //console.log(formatTime(date));
  };
  render() {
    return (
      <section>
        <DatePicker
          maxDate={new Date()}
          inline
          onSelect={this.handleSelect}
          selected={this.state.startDate}
          onChange={this.handleChange}
        />
      </section>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  getMoods: timeString => dispatch(get_moods(timeString))
});

export default connect(
  null,
  mapDispatchToProps
)(Calender);
