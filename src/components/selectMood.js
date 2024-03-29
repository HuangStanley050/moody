import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { FormGroup, Label, Input } from "reactstrap";
import { filter_moods } from "../store/actions/moodActions";

const SelectMood = props => {
  const [mood, setMood] = useState("");
  useEffect(() => {
    props.filter(mood);
  }, [mood]);
  const handleSelect = e => {
    setMood(e.target.value);
  };
  return (
    <FormGroup>
      <Label for="moodSelect">Filter Mood</Label>
      <Input onChange={handleSelect} type="select" value={mood}>
        <option value="default">Default</option>
        <option value="happy">Happy</option>
        <option value="sad">Sad</option>
        <option value="angry">Angry</option>
        <option value="surprise">Surprised</option>
        <option value="disgust">Disgust</option>
        <option value="scared">Scared</option>
      </Input>
    </FormGroup>
  );
};
const mapDispatchToProps = dispatch => ({
  filter: mood => dispatch(filter_moods(mood))
});
export default connect(
  null,
  mapDispatchToProps
)(SelectMood);
