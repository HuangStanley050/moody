import React, { useState } from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import angry_icon from "../assets/angry.png";
import sad_icon from "../assets/sad.png";
import happy_icon from "../assets/happy.png";
import surprise_icon from "../assets/surprise.png";
import scared_icon from "../assets/scared.png";
import disgust_icon from "../assets/disgust.png";

const useMood = () => {
  const [moodForm, setValue] = useState({
    mood: "",
    description: ""
  });
  const handleChange = e => {
    setValue({
      ...moodForm,
      [e.target.name]: e.target.value
    });
  };
  const resetFields = fieldName => {
    setValue({
      ...moodForm,
      mood: "",
      description: ""
    });
  };

  return [moodForm, handleChange, resetFields];
};

const AddMoodForm = props => {
  const [moodForm, handleChange, resetFields] = useMood();
  const selected_style = { border: "3px solid red" };
  const icon_style = {
    width: "50px",
    height: "50px"
  };
  console.log(moodForm);
  return (
    <section style={{ width: "500px", margin: "2rem auto" }}>
      <Form>
        <FormGroup>
          <Label for="moods description">Description</Label>
          <Input
            onChange={handleChange}
            type="text"
            name="description"
            id="description"
            placeholder="How do you feel...?"
          />
        </FormGroup>
        <FormGroup tag="fieldset">
          <legend>How you feeling</legend>
          <div
            className="d-flex justify-content-around"
            style={{ height: "94px" }}
          >
            <FormGroup check>
              <Label
                style={moodForm.mood === "happy" ? selected_style : null}
                className="btn btn-info"
                check
              >
                <i>
                  <img style={icon_style} src={happy_icon} />
                </i>
                <Input
                  onChange={handleChange}
                  type="radio"
                  name="mood"
                  value="happy"
                />{" "}
                Happy
              </Label>
            </FormGroup>
            <FormGroup check>
              <Label
                style={moodForm.mood === "sad" ? selected_style : null}
                className="btn btn-info"
                check
              >
                <i>
                  <img style={icon_style} src={sad_icon} />
                </i>
                <Input
                  onChange={handleChange}
                  type="radio"
                  name="mood"
                  value="sad"
                />{" "}
                Sad
              </Label>
            </FormGroup>
            <FormGroup check>
              <Label
                style={moodForm.mood === "scared" ? selected_style : null}
                className="btn btn-info"
                check
              >
                <i>
                  <img style={icon_style} src={scared_icon} />
                </i>
                <Input
                  onChange={handleChange}
                  type="radio"
                  name="mood"
                  value="scared"
                />{" "}
                Scared
              </Label>
            </FormGroup>
            <FormGroup check>
              <Label
                style={moodForm.mood === "angry" ? selected_style : null}
                className="btn btn-info"
                check
              >
                <i>
                  <img style={icon_style} src={angry_icon} />
                </i>
                <Input
                  onChange={handleChange}
                  type="radio"
                  name="mood"
                  value="angry"
                />{" "}
                Angry
              </Label>
            </FormGroup>
            <FormGroup check>
              <Label
                style={moodForm.mood === "surprise" ? selected_style : null}
                className="btn btn-info"
                check
              >
                <i>
                  <img style={icon_style} src={surprise_icon} />
                </i>
                <Input
                  onChange={handleChange}
                  type="radio"
                  name="mood"
                  value="surprise"
                />{" "}
                Surprise
              </Label>
            </FormGroup>
            <FormGroup check>
              <Label
                style={moodForm.mood === "disgust" ? selected_style : null}
                className="btn btn-info"
                check
              >
                <i>
                  <img style={icon_style} src={disgust_icon} />
                </i>
                <Input
                  onChange={handleChange}
                  type="radio"
                  name="mood"
                  value="disgust"
                />{" "}
                Disgust
              </Label>
            </FormGroup>
          </div>
        </FormGroup>
        <div className="text-center">
          <Button>Submit</Button>
        </div>
      </Form>
    </section>
  );
};

export default AddMoodForm;
