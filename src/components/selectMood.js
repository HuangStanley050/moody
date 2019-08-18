import React, { useState } from "react";
import { FormGroup, Label, Input } from "reactstrap";

const SelectMood = props => {
  const [mood, setMood] = useState("happy");
  const handleSelect = e => {
    console.log("before setMood", mood);
    setMood(e.target.value);
    console.log("after setmood", mood);
  };
  return (
    <FormGroup>
      <Label for="moodSelect">Filter Mood</Label>
      <Input onChange={handleSelect} type="select" value={mood}>
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

export default SelectMood;
