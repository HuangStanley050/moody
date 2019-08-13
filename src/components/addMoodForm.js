import React, { useState } from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";

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
  //console.log(moodForm);
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
          <div className="d-flex justify-content-around">
            <FormGroup check>
              <Label className="btn btn-info" check>
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
              <Label className="btn btn-info" check>
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
              <Label className="btn btn-info" check>
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
              <Label className="btn btn-info" check>
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
              <Label className="btn btn-info" check>
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
              <Label className="btn btn-info" check>
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
      </Form>
    </section>
  );
};

export default AddMoodForm;
