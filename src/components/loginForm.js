import React, { useState } from "react";
import { Button, Form, FormGroup, Label, Input, Container } from "reactstrap";
import { connect } from "react-redux";
import { login_start } from "../store/actions/authActions";

const useForm = () => {
  const [form, setValue] = useState({
    email: "",
    password: ""
  });
  const handleChange = e => {
    setValue({
      ...form,
      [e.target.name]: e.target.value
    });
  };
  const resetFields = fieldName => {
    setValue({
      ...form,
      email: "",
      password: ""
    });
  };

  return [form, handleChange, resetFields];
};

const LoginForm = props => {
  const [form, handleChange, resetFields] = useForm();
  const handleSubmit = e => {
    e.preventDefault();
    // console.log("email", form.email);
    // console.log("password", form.password);
    props.login(form);
    resetFields();
  };
  const handleReset = e => resetFields();
  return (
    <section style={{ width: "420px", margin: "5rem auto" }}>
      <Container>
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Label for="email">Email</Label>
            <Input
              onChange={handleChange}
              type="email"
              name="email"
              id="email"
              value={form.email}
              placeholder="jon_smith@example.com"
            />
          </FormGroup>
          <FormGroup>
            <Label for="password">Password</Label>
            <Input
              onChange={handleChange}
              type="password"
              name="password"
              id="password"
              value={form.password}
              placeholder="your password"
            />
          </FormGroup>
          <Button
            type="submit"
            style={{ marginRight: "2rem" }}
            size="lg"
            color="primary"
          >
            Submit
          </Button>
          <Button onClick={handleReset} type="reset" size="lg" color="danger">
            Reset
          </Button>
        </Form>
      </Container>
    </section>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    login: userInfo => dispatch(login_start(userInfo))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(LoginForm);
