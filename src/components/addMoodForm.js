import React, { useState } from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";

const AddMoodForm = props => {
  return (
    <section style={{ width: "500px", margin: "2rem auto" }}>
      <Form>
        <FormGroup>
          <Label for="moods description">Description</Label>
          <Input
            type="text"
            name="description"
            id="description"
            placeholder="How do you feel...?"
          />
        </FormGroup>
        <FormGroup tag="fieldset">
          <legend>How you feeling</legend>
          <FormGroup check>
            <Label check>
              <Input type="radio" name="radio1" /> Happy
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input type="radio" name="radio1" /> Sad
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input type="radio" name="radio1" /> Scared
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input type="radio" name="radio1" /> Angry
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input type="radio" name="radio1" /> Surprise
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input type="radio" name="radio1" /> Disgust
            </Label>
          </FormGroup>
        </FormGroup>
      </Form>
    </section>
  );
};

export default AddMoodForm;
